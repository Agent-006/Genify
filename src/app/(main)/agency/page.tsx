import AgencyDetails from "@/components/forms/agency-details";
import { Plan } from "@/generated/prisma/schema.prisma";
import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
    searchParams,
}: {
    searchParams: { plan: Plan; state: string; code: string };
}) => {
    const agencyId = await verifyAndAcceptInvitation();
    console.log(agencyId);

    // get user details
    const user = await getAuthUserDetails();
    console.log(user);

    if (agencyId) {
        if (
            user?.role === "SUBACCOUNT_GUEST" ||
            user?.role === "SUBACCOUNT_USER"
        ) {
            return redirect("/subaccount");
        } else if (
            user?.role === "AGENCY_OWNER" ||
            user?.role === "AGENCY_ADMIN"
        ) {
            if (searchParams.plan) {
                return redirect(
                    `/agency/${agencyId}/billing?plan=${searchParams.plan}`
                );
            }

            if (searchParams.state) {
                const statePath = searchParams.state.split("___")[0];
                const stateAgencyId = searchParams.state.split("___")[1];

                if (!stateAgencyId) return <div>Not authorized</div>;

                return redirect(
                    `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`
                );
            } else {
                return redirect(`/agency/${agencyId}`);
            }
        } else {
            return <div>Not authorized</div>;
        }
    }

    const authUser = await currentUser();

    return (
        <div className="flex justify-center items-center p-4 bg-[hsl(var(--background))]">
            <div className="flex flex-col gap-6 max-w-[850px] border-[1px] p-4 bg-[hsl(var(--card))] border-[hsl(var(--muted))] rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold">Create An Agency</h1>
                <AgencyDetails
                    data={{
                        companyEmail: authUser?.emailAddresses[0].emailAddress,
                    }}
                />
            </div>
        </div>
    );
};

export default Page;
