
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  avatarUrl: 'avatarUrl',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role',
  agencyId: 'agencyId'
};

exports.Prisma.AgencyScalarFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  customerId: 'customerId',
  name: 'name',
  agencyLogo: 'agencyLogo',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  whiteLabel: 'whiteLabel',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country',
  goal: 'goal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  email: 'email',
  subAccountId: 'subAccountId',
  access: 'access'
};

exports.Prisma.SubAccountScalarFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  name: 'name',
  subAccountLogo: 'subAccountLogo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  goal: 'goal',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country',
  agencyId: 'agencyId'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId',
  ticketsId: 'ticketsId'
};

exports.Prisma.PipelineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.LaneScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  pipelineId: 'pipelineId',
  order: 'order'
};

exports.Prisma.TicketsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laneId: 'laneId',
  order: 'order',
  value: 'value',
  description: 'description',
  customerId: 'customerId',
  assignedUserId: 'assignedUserId'
};

exports.Prisma.TriggerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  triggerId: 'triggerId',
  published: 'published',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationInstanceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  automationId: 'automationId',
  active: 'active'
};

exports.Prisma.ActionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  automationId: 'automationId',
  order: 'order',
  laneId: 'laneId'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  link: 'link',
  subAccountId: 'subAccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FunnelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description',
  published: 'published',
  subDomainName: 'subDomainName',
  favicon: 'favicon',
  subAccountId: 'subAccountId',
  liveProducts: 'liveProducts'
};

exports.Prisma.FunnelPagesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  pathName: 'pathName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  visits: 'visits',
  content: 'content',
  order: 'order',
  previewImage: 'previewImage',
  funnelId: 'funnelId'
};

exports.Prisma.ClassNameScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  funnelId: 'funnelId',
  customDate: 'customDate'
};

exports.Prisma.AgencySidebarOptionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  icon: 'icon',
  agencyId: 'agencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubAccountSidebarOptionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  icon: 'icon',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.InvitationScalarFieldEnum = {
  id: 'id',
  email: 'email',
  agencyId: 'agencyId',
  status: 'status',
  role: 'role'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  notification: 'notification',
  agencyId: 'agencyId',
  subAccountId: 'subAccountId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  plan: 'plan',
  price: 'price',
  active: 'active',
  priceId: 'priceId',
  customerId: 'customerId',
  currentPeriodEndDate: 'currentPeriodEndDate',
  subscriptionId: 'subscriptionId',
  agencyId: 'agencyId'
};

exports.Prisma.AddOnsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  active: 'active',
  priceId: 'priceId',
  agencyId: 'agencyId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  avatarUrl: 'avatarUrl',
  email: 'email',
  agencyId: 'agencyId'
};

exports.Prisma.AgencyOrderByRelevanceFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  customerId: 'customerId',
  name: 'name',
  agencyLogo: 'agencyLogo',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country'
};

exports.Prisma.PermissionsOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  subAccountId: 'subAccountId'
};

exports.Prisma.SubAccountOrderByRelevanceFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  name: 'name',
  subAccountLogo: 'subAccountLogo',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country',
  agencyId: 'agencyId'
};

exports.Prisma.TagsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  subAccountId: 'subAccountId',
  ticketsId: 'ticketsId'
};

exports.Prisma.PipelineOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  subAccountId: 'subAccountId'
};

exports.Prisma.LaneOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  pipelineId: 'pipelineId'
};

exports.Prisma.TicketsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  laneId: 'laneId',
  description: 'description',
  customerId: 'customerId',
  assignedUserId: 'assignedUserId'
};

exports.Prisma.TriggerOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  triggerId: 'triggerId',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationInstanceOrderByRelevanceFieldEnum = {
  id: 'id',
  automationId: 'automationId'
};

exports.Prisma.ActionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  automationId: 'automationId',
  laneId: 'laneId'
};

exports.Prisma.ContactOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  subAccountId: 'subAccountId'
};

exports.Prisma.MediaOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  link: 'link',
  subAccountId: 'subAccountId'
};

exports.Prisma.FunnelsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  subDomainName: 'subDomainName',
  favicon: 'favicon',
  subAccountId: 'subAccountId',
  liveProducts: 'liveProducts'
};

exports.Prisma.FunnelPagesOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  pathName: 'pathName',
  content: 'content',
  previewImage: 'previewImage',
  funnelId: 'funnelId'
};

exports.Prisma.ClassNameOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  funnelId: 'funnelId',
  customDate: 'customDate'
};

exports.Prisma.AgencySidebarOptionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  agencyId: 'agencyId'
};

exports.Prisma.SubAccountSidebarOptionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  subAccountId: 'subAccountId'
};

exports.Prisma.InvitationOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  agencyId: 'agencyId'
};

exports.Prisma.NotificationOrderByRelevanceFieldEnum = {
  id: 'id',
  notification: 'notification',
  agencyId: 'agencyId',
  subAccountId: 'subAccountId',
  userId: 'userId'
};

exports.Prisma.SubscriptionOrderByRelevanceFieldEnum = {
  id: 'id',
  price: 'price',
  priceId: 'priceId',
  customerId: 'customerId',
  subscriptionId: 'subscriptionId',
  agencyId: 'agencyId'
};

exports.Prisma.AddOnsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  priceId: 'priceId',
  agencyId: 'agencyId'
};
exports.Role = exports.$Enums.Role = {
  AGENCY_OWNER: 'AGENCY_OWNER',
  AGENCY_ADMIN: 'AGENCY_ADMIN',
  SUBACCOUNT_USER: 'SUBACCOUNT_USER',
  SUBACCOUNT_GUEST: 'SUBACCOUNT_GUEST'
};

exports.TriggerTypes = exports.$Enums.TriggerTypes = {
  CONTACT_FORM: 'CONTACT_FORM'
};

exports.ActionType = exports.$Enums.ActionType = {
  CREATE_CONTACT: 'CREATE_CONTACT'
};

exports.Icon = exports.$Enums.Icon = {
  info: 'info'
};

exports.InvitationStatus = exports.$Enums.InvitationStatus = {
  ACCEPTED: 'ACCEPTED',
  REVOKED: 'REVOKED',
  PENDING: 'PENDING'
};

exports.Plan = exports.$Enums.Plan = {
  price_10MhuWld5Bk5htqogRZXP2e: 'price_10MhuWld5Bk5htqogRZXP2e',
  price_10MhuWld5Bk5htqogRZXPmj: 'price_10MhuWld5Bk5htqogRZXPmj'
};

exports.Prisma.ModelName = {
  User: 'User',
  Agency: 'Agency',
  Permissions: 'Permissions',
  SubAccount: 'SubAccount',
  Tags: 'Tags',
  Pipeline: 'Pipeline',
  Lane: 'Lane',
  Tickets: 'Tickets',
  Trigger: 'Trigger',
  Automation: 'Automation',
  AutomationInstance: 'AutomationInstance',
  Action: 'Action',
  Contact: 'Contact',
  Media: 'Media',
  Funnels: 'Funnels',
  FunnelPages: 'FunnelPages',
  ClassName: 'ClassName',
  AgencySidebarOption: 'AgencySidebarOption',
  SubAccountSidebarOption: 'SubAccountSidebarOption',
  Invitation: 'Invitation',
  Notification: 'Notification',
  Subscription: 'Subscription',
  AddOns: 'AddOns'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
