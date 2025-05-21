"use client";

import { Agency } from "@/generated/prisma/schema.prisma";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUpload from "../global/file-upload";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { type } from "../../generated/prisma/schema.prisma/index";
import {
    deleteAgency,
    initUser,
    saveActivityLogsNotification,
    updateAgencyDetails,
} from "@/lib/queries";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
    data?: Partial<Agency>;
};

const FormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" }),
    companyEmail: z.string().min(1),
    companyPhone: z.string().min(1),
    whiteLabel: z.boolean(),
    address: z.string().min(1),
    city: z.string().min(1),
    zipCode: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    agencyLogo: z.string().min(1),
});

const AgencyDetails = ({ data }: Props) => {
    const router = useRouter();
    const [deletingAgency, setDeletingAgency] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: "onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: data?.name || "",
            companyEmail: data?.companyEmail || "",
            companyPhone: data?.companyPhone || "",
            whiteLabel: data?.whiteLabel || false,
            address: data?.address || "",
            city: data?.city || "",
            zipCode: data?.zipCode || "",
            state: data?.state || "",
            country: data?.country || "",
            agencyLogo: data?.agencyLogo || "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    useEffect(() => {
        if (data) {
            form.reset(data);
        }
    }, [data]);

    const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
        try {
            let newUserData;
            let customerId;

            if (data?.id) {
                const bodyData = {
                    email: values.companyEmail,
                    name: values.name,
                    shipping: {
                        address: {
                            city: values.city,
                            country: values.country,
                            line1: values.address,
                            postal_code: values.zipCode,
                            state: values.zipCode,
                        },
                        name: values.name,
                    },
                    address: {
                        city: values.city,
                        country: values.country,
                        line1: values.address,
                        postal_code: values.zipCode,
                        state: values.zipCode,
                    },
                };

                newUserData = await initUser({
                    role: "AGENCY_OWNER",
                });
                //TODO: custId
                if(!data?.customerId) {
                    const response = await upsertAgency()
                }
            }
        } catch (error) {
            console.log(error);
            toast("Oppse!", {
                description: "could not update agency, please try again later",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteAgency = async () => {
        if (!data?.id) return;
        setDeletingAgency(true);

        //TODO: discontinue the subscription

        try {
            const response = await deleteAgency(data.id);
            console.log(response);
            if (response) {
                toast("Deleted Agency Successfully", {
                    description:
                        "All related sub-accounts will also be deleted",
                });
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            toast("Oppse!", {
                description: "could not delete agency, please try again later",
            });
        } finally {
            setDeletingAgency(false);
        }
    };

    return (
        <AlertDialog>
            <Card className="w-full bg-[hsl(var(--primary-foreground))] border-2 border-[hsl(var(--muted))] rounded-lg shadow-md">
                <CardHeader>
                    <CardTitle>Agency Information</CardTitle>
                    <CardDescription>
                        Let&apos;s create an agency for your business. You can
                        edit agency settings later from the agency settings tab.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                disabled={isLoading}
                                control={form.control}
                                name="agencyLogo"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start py-4 bg-[hsl(var(--primary-foreground))] shadow-lg rounded-lg">
                                        <FormLabel className="text-lg font-semibold mb-2 text-[hsl(var(--primary))]">
                                            Agency Logo
                                        </FormLabel>
                                        <FormControl>
                                            <div className="w-full border-2 border-dashed border-[hsl(var(--muted))] p-4 rounded-md hover:border-[hsl(var(--primary))] transition-colors duration-300">
                                                <FileUpload
                                                    apiEndpoint="agencyLogo"
                                                    onChange={field.onChange}
                                                    value={field.value}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[hsl(var(--destructive))] mt-2" />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col md:flex-row gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Agency Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Your Agency Name"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="companyEmail"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Company Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Your Company Email"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col md:flex-col gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="companyPhone"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Agency Phone Number
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="Phone"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2 outline-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="whiteLabel"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-[hsl(var(--muted))] gap-4 p-4 space-y-2">
                                            <div className="flex flex-col gap-2">
                                                <FormLabel className="text-[hsl(var(--primary))]">
                                                    Whitelabel Agency
                                                </FormLabel>
                                                <FormDescription className="text-[hsl(var(--muted-foreground))]">
                                                    Turning on whitelabel mode
                                                    will show your agency logo
                                                    to all sub-accounts by
                                                    default. You can overwrite
                                                    this functionality through
                                                    sub-account settings.
                                                </FormDescription>
                                            </div>

                                            <FormControl>
                                                <Switch
                                                    className="cursor-pointer"
                                                    id="whiteLabel"
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Address
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="123 st..."
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                City
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="City"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                State
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="State"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="zipCode"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Zip Code
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Zip Code"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 space-y-2">
                                            <FormLabel className="text-[hsl(var(--primary))]">
                                                Country
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Country"
                                                    className="border border-[hsl(var(--muted))] rounded-md p-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[hsl(var(--destructive))]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {data?.id && (
                                <div className="flex flex-col items-start justify-between rounded-lg border border-[hsl(var(--muted))] gap-1 p-4 space-y-2">
                                    <FormLabel className="text-[hsl(var(--primary))]  font-semibold">
                                        Agency Goal
                                    </FormLabel>
                                    <FormDescription className="text-[hsl(var(--muted-foreground))]">
                                        Set a goal for your agency. As your
                                        business grows, your goals grow
                                        too—don&apos;t forget to set that bar
                                        higher!
                                    </FormDescription>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            defaultValue={data?.goal}
                                            onChange={async (
                                                e: React.ChangeEvent<HTMLInputElement>
                                            ) => {
                                                if (!data?.id) return;
                                                const val = Number(
                                                    e.target.value
                                                );
                                                await updateAgencyDetails(
                                                    data.id,
                                                    {
                                                        goal: val,
                                                    }
                                                );
                                                await saveActivityLogsNotification(
                                                    {
                                                        agencyId: data.id,
                                                        description: `Updated the agency goal to | ${val} SubAccount`,
                                                        subAccountId: undefined,
                                                    }
                                                );
                                                router.refresh();
                                            }}
                                            min={1}
                                            className="border border-[hsl(var(--muted))] rounded-md p-2"
                                            placeholder="Sub Account Goal"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[hsl(var(--destructive))]" />
                                </div>
                            )}

                            <Button
                                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--muted-foreground))] transition-colors duration-300 cursor-pointer"
                                variant="default"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    "Save Agency Information"
                                )}
                            </Button>
                        </form>
                    </Form>
                    {/* {data?.id && ( */}
                    <div className="flex flex-col items-start justify-between rounded-lg border border-[hsl(var(--destructive))] gap-4 p-4  mt-4">
                        <div>
                            <div className="text-red-600">Danger Zone</div>
                        </div>
                        <div className="text-[hsl(var(--muted-foreground))] text-sm">
                            Deleting your agency cannot be undone. This will
                            also delete all your sub-accounts. Sub accounts will
                            no longer have access to funnels, contacts etc.
                        </div>
                        <AlertDialogTrigger
                            disabled={isLoading || deletingAgency}
                            className="text-red-600 hover:bg-transparent hover:text-white border border-transparent hover:border hover:border-[hsl(var(--destructive))] transition-colors duration-300 font-semibold rounded-lg px-3 py-2 mt-2 cursor-pointer"
                        >
                            {deletingAgency ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                "Delete Agency"
                            )}
                        </AlertDialogTrigger>
                    </div>
                    {/* )} */}

                    <AlertDialogContent className="w-full max-w-lg bg-[hsl(var(--primary-foreground))] border-2 border-[hsl(var(--destructive))] rounded-3xl shadow-2xl p-10">
                        <AlertDialogHeader className="flex flex-col items-center justify-center gap-3">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--destructive)/0.12)] shadow-lg mb-2">
                                <svg
                                    className="w-9 h-9 text-[hsl(var(--destructive))]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8v4m0 4h.01"
                                    />
                                </svg>
                            </div>
                            <AlertDialogTitle className="text-[hsl(var(--destructive))] text-2xl font-extrabold text-center tracking-tight drop-shadow">
                                Danger Zone: Delete Agency
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-center text-[hsl(var(--muted-foreground))] mt-2 text-base leading-relaxed">
                                <span className="font-bold text-[hsl(var(--destructive))]">
                                    Warning:
                                </span>{" "}
                                This action{" "}
                                <span className="underline">cannot</span> be
                                undone.
                                <br />
                                <span className="font-medium">
                                    Deleting your agency will{" "}
                                    <span className="text-[hsl(var(--destructive))]">
                                        permanently remove
                                    </span>{" "}
                                    your agency account and{" "}
                                    <span className="text-[hsl(var(--destructive))]">
                                        all related sub-accounts
                                    </span>
                                    .
                                </span>
                                <br />
                                <span className="italic text-xs text-[hsl(var(--muted-foreground)/0.8)]">
                                    All data, funnels, and contacts will be
                                    lost.
                                </span>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="w-full flex flex-row justify-center items-center md:justify-center md:items-center gap-6 mt-8">
                            <AlertDialogCancel className="px-7 py-2 rounded-lg border border-[hsl(var(--muted))] bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] font-semibold hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-all duration-200 shadow hover:shadow-md cursor-pointer">
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                                disabled={deletingAgency}
                                className="px-7 py-2 rounded-lg bg-gradient-to-r from-[hsl(var(--destructive))] to-red-700 text-white font-bold shadow-lg hover:from-red-700 hover:to-[hsl(var(--destructive))] transition-all duration-200 cursor-pointer flex items-center gap-2 border border-[hsl(var(--destructive))] focus:ring-2 focus:ring-[hsl(var(--destructive))]/50"
                                onClick={handleDeleteAgency}
                            >
                                {deletingAgency ? (
                                    <Loader2 className="animate-spin w-5 h-5" />
                                ) : (
                                    <>
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                        Delete Agency
                                    </>
                                )}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </CardContent>
            </Card>
        </AlertDialog>
    );
};

export default AgencyDetails;
