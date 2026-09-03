export type ClientOptions = {
    baseUrl: "https://glink.so/api/rest" | (string & {});
};
/**
 * Invalid input data error (400)
 *
 * The error information
 */
export type ErrorBadRequest = {
    /**
     * The error message
     */
    message: string;
    /**
     * The error code
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     */
    issues?: Array<{
        message: string;
    }>;
};
/**
 * Authorization not provided error (401)
 *
 * The error information
 */
export type ErrorUnauthorized = {
    /**
     * The error message
     */
    message: string;
    /**
     * The error code
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     */
    issues?: Array<{
        message: string;
    }>;
};
/**
 * Insufficient access error (403)
 *
 * The error information
 */
export type ErrorForbidden = {
    /**
     * The error message
     */
    message: string;
    /**
     * The error code
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     */
    issues?: Array<{
        message: string;
    }>;
};
/**
 * Not found error (404)
 *
 * The error information
 */
export type ErrorNotFound = {
    /**
     * The error message
     */
    message: string;
    /**
     * The error code
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     */
    issues?: Array<{
        message: string;
    }>;
};
/**
 * Internal server error error (500)
 *
 * The error information
 */
export type ErrorInternalServerError = {
    /**
     * The error message
     */
    message: string;
    /**
     * The error code
     */
    code: string;
    /**
     * An array of issues that were responsible for the error
     */
    issues?: Array<{
        message: string;
    }>;
};
export type AuthChangePasswordData = {
    body: {
        confirmPassword: string;
        currentPassword: string;
        newPassword: string;
    };
    path?: never;
    query?: never;
    url: "/auth/change-password";
};
export type AuthChangePasswordErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type AuthChangePasswordError = AuthChangePasswordErrors[keyof AuthChangePasswordErrors];
export type AuthChangePasswordResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type AuthChangePasswordResponse = AuthChangePasswordResponses[keyof AuthChangePasswordResponses];
export type ChangelogAddEntryData = {
    body: {
        changelogId: string;
        entryId: string;
        position?: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/entries/add";
};
export type ChangelogAddEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogAddEntryError = ChangelogAddEntryErrors[keyof ChangelogAddEntryErrors];
export type ChangelogAddEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogCreateData = {
    body: {
        projectId: string;
        title: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs";
};
export type ChangelogCreateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogCreateError = ChangelogCreateErrors[keyof ChangelogCreateErrors];
export type ChangelogCreateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogCreateChangeData = {
    body: {
        changelogId: string;
        tag: "Feature" | "BugFix" | "Improvement";
        title: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/changes";
};
export type ChangelogCreateChangeErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogCreateChangeError = ChangelogCreateChangeErrors[keyof ChangelogCreateChangeErrors];
export type ChangelogCreateChangeResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogDeleteData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/changelogs/delete";
};
export type ChangelogDeleteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogDeleteError = ChangelogDeleteErrors[keyof ChangelogDeleteErrors];
export type ChangelogDeleteResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogDeleteChangeData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/changelogs/changes/delete";
};
export type ChangelogDeleteChangeErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogDeleteChangeError = ChangelogDeleteChangeErrors[keyof ChangelogDeleteChangeErrors];
export type ChangelogDeleteChangeResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogGenerateMarkdownData = {
    body: {
        id: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/markdown";
};
export type ChangelogGenerateMarkdownErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogGenerateMarkdownError = ChangelogGenerateMarkdownErrors[keyof ChangelogGenerateMarkdownErrors];
export type ChangelogGenerateMarkdownResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogGetByIdData = {
    body: {
        id: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/get";
};
export type ChangelogGetByIdErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogGetByIdError = ChangelogGetByIdErrors[keyof ChangelogGetByIdErrors];
export type ChangelogGetByIdResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogGetEntriesAndRequestsData = {
    body: {
        changelogId: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/entries-requests";
};
export type ChangelogGetEntriesAndRequestsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogGetEntriesAndRequestsError = ChangelogGetEntriesAndRequestsErrors[keyof ChangelogGetEntriesAndRequestsErrors];
export type ChangelogGetEntriesAndRequestsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogGetUnassignedEntriesData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/entries/unassigned";
};
export type ChangelogGetUnassignedEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogGetUnassignedEntriesError = ChangelogGetUnassignedEntriesErrors[keyof ChangelogGetUnassignedEntriesErrors];
export type ChangelogGetUnassignedEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogListByProjectData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/list";
};
export type ChangelogListByProjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogListByProjectError = ChangelogListByProjectErrors[keyof ChangelogListByProjectErrors];
export type ChangelogListByProjectResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogPublishData = {
    body: {
        entriesColumnId?: string;
        id: string;
        publishedAt: string;
        shouldCloseRequests: boolean;
        shouldMoveEntries: boolean;
        shouldNotifyUsers: boolean;
    };
    path?: never;
    query?: never;
    url: "/changelogs/publish";
};
export type ChangelogPublishErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogPublishError = ChangelogPublishErrors[keyof ChangelogPublishErrors];
export type ChangelogPublishResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogRemoveEntryData = {
    body: {
        entryId: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/entries/remove";
};
export type ChangelogRemoveEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogRemoveEntryError = ChangelogRemoveEntryErrors[keyof ChangelogRemoveEntryErrors];
export type ChangelogRemoveEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogReorderEntriesData = {
    body: {
        changelogId: string;
        entryIds: Array<string>;
    };
    path?: never;
    query?: never;
    url: "/changelogs/entries/reorder";
};
export type ChangelogReorderEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogReorderEntriesError = ChangelogReorderEntriesErrors[keyof ChangelogReorderEntriesErrors];
export type ChangelogReorderEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogUpdateData = {
    body: {
        footer?: string;
        header?: string;
        id: string;
        title: string;
        version?: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/update";
};
export type ChangelogUpdateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogUpdateError = ChangelogUpdateErrors[keyof ChangelogUpdateErrors];
export type ChangelogUpdateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogUpdateChangeData = {
    body: {
        id: string;
        tag: "Feature" | "BugFix" | "Improvement";
        title: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/changes/update";
};
export type ChangelogUpdateChangeErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogUpdateChangeError = ChangelogUpdateChangeErrors[keyof ChangelogUpdateChangeErrors];
export type ChangelogUpdateChangeResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ChangelogUpdateStatusData = {
    body: {
        id: string;
        status: string;
    };
    path?: never;
    query?: never;
    url: "/changelogs/update-status";
};
export type ChangelogUpdateStatusErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ChangelogUpdateStatusError = ChangelogUpdateStatusErrors[keyof ChangelogUpdateStatusErrors];
export type ChangelogUpdateStatusResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DeploymentClearProjectDeploymentData = {
    body?: never;
    path?: never;
    query: {
        projectId: string;
    };
    url: "/deployment/project";
};
export type DeploymentClearProjectDeploymentErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentClearProjectDeploymentError = DeploymentClearProjectDeploymentErrors[keyof DeploymentClearProjectDeploymentErrors];
export type DeploymentClearProjectDeploymentResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type DeploymentClearProjectDeploymentResponse = DeploymentClearProjectDeploymentResponses[keyof DeploymentClearProjectDeploymentResponses];
export type DeploymentConnectAccountData = {
    body: {
        baseUrl?: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        token: string;
    };
    path?: never;
    query?: never;
    url: "/deployment/connections/connect";
};
export type DeploymentConnectAccountErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentConnectAccountError = DeploymentConnectAccountErrors[keyof DeploymentConnectAccountErrors];
export type DeploymentConnectAccountResponses = {
    /**
     * Successful response
     */
    200: {
        accountName: string | null;
        createdAt: string;
        id: string;
        lastVerifiedAt: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        tokenHint: string;
    };
};
export type DeploymentConnectAccountResponse = DeploymentConnectAccountResponses[keyof DeploymentConnectAccountResponses];
export type DeploymentDisconnectAccountData = {
    body?: never;
    path?: never;
    query: {
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
    };
    url: "/deployment/connections";
};
export type DeploymentDisconnectAccountErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentDisconnectAccountError = DeploymentDisconnectAccountErrors[keyof DeploymentDisconnectAccountErrors];
export type DeploymentDisconnectAccountResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type DeploymentDisconnectAccountResponse = DeploymentDisconnectAccountResponses[keyof DeploymentDisconnectAccountResponses];
export type DeploymentGetProjectDeploymentData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/deployment/project/get";
};
export type DeploymentGetProjectDeploymentErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentGetProjectDeploymentError = DeploymentGetProjectDeploymentErrors[keyof DeploymentGetProjectDeploymentErrors];
export type DeploymentGetProjectDeploymentResponses = {
    /**
     * Successful response
     */
    200: {
        connection: {
            accountName: string | null;
            createdAt: string;
            id: string;
            lastVerifiedAt: string | null;
            platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
            tokenHint: string;
        } | null;
        connectionId: string | null;
        createdAt: string;
        id: string;
        lastSyncedAt: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        projectId: string;
        remoteProjectId: string | null;
        remoteProjectName: string | null;
        remoteTeamId: string | null;
        updatedAt: string;
        url: string | null;
    } | null;
};
export type DeploymentGetProjectDeploymentResponse = DeploymentGetProjectDeploymentResponses[keyof DeploymentGetProjectDeploymentResponses];
export type DeploymentListConnectionsData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: never;
    url: "/deployment/connections/list";
};
export type DeploymentListConnectionsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentListConnectionsError = DeploymentListConnectionsErrors[keyof DeploymentListConnectionsErrors];
export type DeploymentListConnectionsResponses = {
    /**
     * Successful response
     */
    200: Array<{
        accountName: string | null;
        createdAt: string;
        id: string;
        lastVerifiedAt: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        tokenHint: string;
    }>;
};
export type DeploymentListConnectionsResponse = DeploymentListConnectionsResponses[keyof DeploymentListConnectionsResponses];
export type DeploymentListPlatformsData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: never;
    url: "/deployment/platforms/list";
};
export type DeploymentListPlatformsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentListPlatformsError = DeploymentListPlatformsErrors[keyof DeploymentListPlatformsErrors];
export type DeploymentListPlatformsResponses = {
    /**
     * Successful response
     */
    200: Array<{
        accountConnection: "available" | "planned" | "none";
        label: string;
        tokenDocsUrl: string | null;
        tokenLabel: string | null;
        tokenScopeNote: string | null;
        value: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
    }>;
};
export type DeploymentListPlatformsResponse = DeploymentListPlatformsResponses[keyof DeploymentListPlatformsResponses];
export type DeploymentListRemoteProjectsData = {
    body: {
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
    };
    path?: never;
    query?: never;
    url: "/deployment/remote-projects/list";
};
export type DeploymentListRemoteProjectsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentListRemoteProjectsError = DeploymentListRemoteProjectsErrors[keyof DeploymentListRemoteProjectsErrors];
export type DeploymentListRemoteProjectsResponses = {
    /**
     * Successful response
     */
    200: Array<{
        framework: string | null;
        id: string;
        name: string;
        productionUrl: string | null;
        teamId: string | null;
        teamName: string | null;
    }>;
};
export type DeploymentListRemoteProjectsResponse = DeploymentListRemoteProjectsResponses[keyof DeploymentListRemoteProjectsResponses];
export type DeploymentRefreshDeploymentUrlData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/deployment/project/refresh-url";
};
export type DeploymentRefreshDeploymentUrlErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentRefreshDeploymentUrlError = DeploymentRefreshDeploymentUrlErrors[keyof DeploymentRefreshDeploymentUrlErrors];
export type DeploymentRefreshDeploymentUrlResponses = {
    /**
     * Successful response
     */
    200: {
        connection: {
            accountName: string | null;
            createdAt: string;
            id: string;
            lastVerifiedAt: string | null;
            platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
            tokenHint: string;
        } | null;
        connectionId: string | null;
        createdAt: string;
        id: string;
        lastSyncedAt: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        projectId: string;
        remoteProjectId: string | null;
        remoteProjectName: string | null;
        remoteTeamId: string | null;
        updatedAt: string;
        url: string | null;
    };
};
export type DeploymentRefreshDeploymentUrlResponse = DeploymentRefreshDeploymentUrlResponses[keyof DeploymentRefreshDeploymentUrlResponses];
export type DeploymentSetProjectDeploymentData = {
    body: {
        connectionId?: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        projectId: string;
        remoteProjectId?: string | null;
        remoteProjectName?: string | null;
        remoteTeamId?: string | null;
        url?: string | "" | null;
    };
    path?: never;
    query?: never;
    url: "/deployment/project/set";
};
export type DeploymentSetProjectDeploymentErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DeploymentSetProjectDeploymentError = DeploymentSetProjectDeploymentErrors[keyof DeploymentSetProjectDeploymentErrors];
export type DeploymentSetProjectDeploymentResponses = {
    /**
     * Successful response
     */
    200: {
        connection: {
            accountName: string | null;
            createdAt: string;
            id: string;
            lastVerifiedAt: string | null;
            platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
            tokenHint: string;
        } | null;
        connectionId: string | null;
        createdAt: string;
        id: string;
        lastSyncedAt: string | null;
        platform: "Vercel" | "Cloudflare" | "Coolify" | "Netlify" | "Railway" | "Render" | "Fly" | "Heroku" | "DigitalOcean" | "AWS" | "GoogleCloud" | "Azure" | "Hetzner" | "Kubernetes" | "SelfHosted" | "Other";
        projectId: string;
        remoteProjectId: string | null;
        remoteProjectName: string | null;
        remoteTeamId: string | null;
        updatedAt: string;
        url: string | null;
    };
};
export type DeploymentSetProjectDeploymentResponse = DeploymentSetProjectDeploymentResponses[keyof DeploymentSetProjectDeploymentResponses];
export type DiscussionCreateCategoryData = {
    body: {
        canBeAnswered?: boolean;
        color?: string | null;
        emoji: string;
        projectId: string;
        slug: string;
        title: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/categories/create";
};
export type DiscussionCreateCategoryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionCreateCategoryError = DiscussionCreateCategoryErrors[keyof DiscussionCreateCategoryErrors];
export type DiscussionCreateCategoryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionCreateDiscussionData = {
    body: {
        data: {
            body: string;
            categorySlug: string;
            notificationMessage?: string;
            sendEmailNotification?: boolean;
            sendUiNotification?: boolean;
            title: string;
        };
        images?: Array<{
            id: string;
        }>;
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/create";
};
export type DiscussionCreateDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionCreateDiscussionError = DiscussionCreateDiscussionErrors[keyof DiscussionCreateDiscussionErrors];
export type DiscussionCreateDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionDeleteCategoryData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/discussions/categories/delete";
};
export type DiscussionDeleteCategoryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionDeleteCategoryError = DiscussionDeleteCategoryErrors[keyof DiscussionDeleteCategoryErrors];
export type DiscussionDeleteCategoryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionDeleteDiscussionData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/discussions/delete";
};
export type DiscussionDeleteDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionDeleteDiscussionError = DiscussionDeleteDiscussionErrors[keyof DiscussionDeleteDiscussionErrors];
export type DiscussionDeleteDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionDeletePostData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/discussions/posts/delete";
};
export type DiscussionDeletePostErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionDeletePostError = DiscussionDeletePostErrors[keyof DiscussionDeletePostErrors];
export type DiscussionDeletePostResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionGetCategoriesData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/categories";
};
export type DiscussionGetCategoriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionGetCategoriesError = DiscussionGetCategoriesErrors[keyof DiscussionGetCategoriesErrors];
export type DiscussionGetCategoriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionGetCategoriesByProjectSlugData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/categories/by-project";
};
export type DiscussionGetCategoriesByProjectSlugErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionGetCategoriesByProjectSlugError = DiscussionGetCategoriesByProjectSlugErrors[keyof DiscussionGetCategoriesByProjectSlugErrors];
export type DiscussionGetCategoriesByProjectSlugResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionGetDiscussionData = {
    body: {
        discussionId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/get";
};
export type DiscussionGetDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionGetDiscussionError = DiscussionGetDiscussionErrors[keyof DiscussionGetDiscussionErrors];
export type DiscussionGetDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionGetDiscussionsData = {
    body: {
        categorySlug?: string;
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/list";
};
export type DiscussionGetDiscussionsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionGetDiscussionsError = DiscussionGetDiscussionsErrors[keyof DiscussionGetDiscussionsErrors];
export type DiscussionGetDiscussionsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionGetReactionsData = {
    body: {
        discussionId?: string;
        discussionPostId?: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/reactions/list";
};
export type DiscussionGetReactionsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionGetReactionsError = DiscussionGetReactionsErrors[keyof DiscussionGetReactionsErrors];
export type DiscussionGetReactionsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionIsWatchingDiscussionData = {
    body: {
        discussionId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/watch/status";
};
export type DiscussionIsWatchingDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionIsWatchingDiscussionError = DiscussionIsWatchingDiscussionErrors[keyof DiscussionIsWatchingDiscussionErrors];
export type DiscussionIsWatchingDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionMarkAsAnswerData = {
    body: {
        postId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/answer/mark";
};
export type DiscussionMarkAsAnswerErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionMarkAsAnswerError = DiscussionMarkAsAnswerErrors[keyof DiscussionMarkAsAnswerErrors];
export type DiscussionMarkAsAnswerResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionPinDiscussionData = {
    body: {
        discussionId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/pin";
};
export type DiscussionPinDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionPinDiscussionError = DiscussionPinDiscussionErrors[keyof DiscussionPinDiscussionErrors];
export type DiscussionPinDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionReactData = {
    body: {
        discussionId?: string;
        discussionPostId?: string;
        type: "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES";
    };
    path?: never;
    query?: never;
    url: "/discussions/reactions";
};
export type DiscussionReactErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionReactError = DiscussionReactErrors[keyof DiscussionReactErrors];
export type DiscussionReactResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionReplyToDiscussionData = {
    body: {
        body: string;
        discussionId: string;
        images?: Array<{
            id: string;
        }>;
        replyToId?: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/reply";
};
export type DiscussionReplyToDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionReplyToDiscussionError = DiscussionReplyToDiscussionErrors[keyof DiscussionReplyToDiscussionErrors];
export type DiscussionReplyToDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionUnmarkAsAnswerData = {
    body: {
        postId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/answer/unmark";
};
export type DiscussionUnmarkAsAnswerErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionUnmarkAsAnswerError = DiscussionUnmarkAsAnswerErrors[keyof DiscussionUnmarkAsAnswerErrors];
export type DiscussionUnmarkAsAnswerResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionUpdateCategoryData = {
    body: {
        canBeAnswered?: boolean;
        color?: string | null;
        emoji?: string;
        id: string;
        slug?: string;
        title?: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/categories/update";
};
export type DiscussionUpdateCategoryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionUpdateCategoryError = DiscussionUpdateCategoryErrors[keyof DiscussionUpdateCategoryErrors];
export type DiscussionUpdateCategoryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionUpdateDiscussionData = {
    body: {
        body?: string;
        categorySlug?: string;
        id: string;
        title?: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/update";
};
export type DiscussionUpdateDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionUpdateDiscussionError = DiscussionUpdateDiscussionErrors[keyof DiscussionUpdateDiscussionErrors];
export type DiscussionUpdateDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionUpdatePostData = {
    body: {
        body: string;
        id: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/posts/update";
};
export type DiscussionUpdatePostErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionUpdatePostError = DiscussionUpdatePostErrors[keyof DiscussionUpdatePostErrors];
export type DiscussionUpdatePostResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionUpvoteData = {
    body: {
        discussionId?: string;
        discussionPostId?: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/upvote";
};
export type DiscussionUpvoteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionUpvoteError = DiscussionUpvoteErrors[keyof DiscussionUpvoteErrors];
export type DiscussionUpvoteResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type DiscussionWatchDiscussionData = {
    body: {
        discussionId: string;
    };
    path?: never;
    query?: never;
    url: "/discussions/watch";
};
export type DiscussionWatchDiscussionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type DiscussionWatchDiscussionError = DiscussionWatchDiscussionErrors[keyof DiscussionWatchDiscussionErrors];
export type DiscussionWatchDiscussionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryCheckSlugAvailabilityData = {
    body: {
        entryId?: string;
        projectId: string;
        slug: string;
    };
    path?: never;
    query?: never;
    url: "/entries/check-slug";
};
export type EntryCheckSlugAvailabilityErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryCheckSlugAvailabilityError = EntryCheckSlugAvailabilityErrors[keyof EntryCheckSlugAvailabilityErrors];
export type EntryCheckSlugAvailabilityResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryCreateData = {
    body: {
        description?: string;
        mediaRequirement?: "none" | "image" | "video" | "gif" | "mix";
        projectId: string;
        title?: string;
        type?: string;
    };
    path?: never;
    query?: never;
    url: "/entries";
};
export type EntryCreateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryCreateError = EntryCreateErrors[keyof EntryCreateErrors];
export type EntryCreateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryDeleteData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/entries/delete";
};
export type EntryDeleteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryDeleteError = EntryDeleteErrors[keyof EntryDeleteErrors];
export type EntryDeleteResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetByIdData = {
    body: {
        id: string;
    };
    path?: never;
    query?: never;
    url: "/entries/get";
};
export type EntryGetByIdErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetByIdError = EntryGetByIdErrors[keyof EntryGetByIdErrors];
export type EntryGetByIdResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetEntriesByDateData = {
    body: {
        date: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/entries/public/by-date";
};
export type EntryGetEntriesByDateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetEntriesByDateError = EntryGetEntriesByDateErrors[keyof EntryGetEntriesByDateErrors];
export type EntryGetEntriesByDateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetLeaderboardData = {
    body: {
        limit?: number;
    };
    path?: never;
    query?: never;
    url: "/entries/public/leaderboard";
};
export type EntryGetLeaderboardErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetLeaderboardError = EntryGetLeaderboardErrors[keyof EntryGetLeaderboardErrors];
export type EntryGetLeaderboardResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetPublicTimelineData = {
    body: {
        cursor?: string;
        limit?: number;
    };
    path?: never;
    query?: never;
    url: "/entries/public/timeline";
};
export type EntryGetPublicTimelineErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetPublicTimelineError = EntryGetPublicTimelineErrors[keyof EntryGetPublicTimelineErrors];
export type EntryGetPublicTimelineResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetTimelineActivityData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/entries/public/timeline-activity";
};
export type EntryGetTimelineActivityErrors = {
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetTimelineActivityError = EntryGetTimelineActivityErrors[keyof EntryGetTimelineActivityErrors];
export type EntryGetTimelineActivityResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryGetTrendingProjectsData = {
    body: {
        limit?: number;
    };
    path?: never;
    query?: never;
    url: "/entries/public/trending-projects";
};
export type EntryGetTrendingProjectsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryGetTrendingProjectsError = EntryGetTrendingProjectsErrors[keyof EntryGetTrendingProjectsErrors];
export type EntryGetTrendingProjectsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryListData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/entries/list";
};
export type EntryListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryListError = EntryListErrors[keyof EntryListErrors];
export type EntryListResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryListByProjectData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/entries/list-by-project";
};
export type EntryListByProjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryListByProjectError = EntryListByProjectErrors[keyof EntryListByProjectErrors];
export type EntryListByProjectResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryReorderEntriesData = {
    body: {
        entryIds: Array<string>;
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/entries/reorder";
};
export type EntryReorderEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryReorderEntriesError = EntryReorderEntriesErrors[keyof EntryReorderEntriesErrors];
export type EntryReorderEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryUpdateData = {
    body: {
        description?: string;
        emoji?: string;
        id: string;
        mediaRequirement?: "none" | "image" | "video" | "gif" | "mix";
        slug?: string | "";
        title?: string;
        type?: string;
    };
    path?: never;
    query?: never;
    url: "/entries/update";
};
export type EntryUpdateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryUpdateError = EntryUpdateErrors[keyof EntryUpdateErrors];
export type EntryUpdateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type EntryUpdateStatusData = {
    body: {
        id: string;
        status: "Draft" | "ReadyForReview" | "Published";
    };
    path?: never;
    query?: never;
    url: "/entries/update-status";
};
export type EntryUpdateStatusErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type EntryUpdateStatusError = EntryUpdateStatusErrors[keyof EntryUpdateStatusErrors];
export type EntryUpdateStatusResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type FeatureGetPublicFeatureData = {
    body: {
        featureSlug: string;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/features/public/get";
};
export type FeatureGetPublicFeatureErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type FeatureGetPublicFeatureError = FeatureGetPublicFeatureErrors[keyof FeatureGetPublicFeatureErrors];
export type FeatureGetPublicFeatureResponses = {
    /**
     * Successful response
     */
    200: {
        content: string | null;
        createdAt: string;
        description: string | null;
        entries: Array<{
            content: string | null;
            createdAt: string;
            emoji: string | null;
            id: string;
            slug: string | null;
            tag: string | null;
            title: string | null;
        }>;
        id: string;
        publishedAt: string | null;
        slug: string;
        title: string;
        updatedAt: string;
    };
};
export type FeatureGetPublicFeatureResponse = FeatureGetPublicFeatureResponses[keyof FeatureGetPublicFeatureResponses];
export type FeatureGetPublicFeaturesData = {
    body: {
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/features/public/list";
};
export type FeatureGetPublicFeaturesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type FeatureGetPublicFeaturesError = FeatureGetPublicFeaturesErrors[keyof FeatureGetPublicFeaturesErrors];
export type FeatureGetPublicFeaturesResponses = {
    /**
     * Successful response
     */
    200: Array<{
        content: string | null;
        createdAt: string;
        description: string | null;
        id: string;
        publishedAt: string | null;
        slug: string;
        title: string;
        updatedAt: string;
    }>;
};
export type FeatureGetPublicFeaturesResponse = FeatureGetPublicFeaturesResponses[keyof FeatureGetPublicFeaturesResponses];
export type GithubClearProjectTokenData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo/token/clear";
};
export type GithubClearProjectTokenErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubClearProjectTokenError = GithubClearProjectTokenErrors[keyof GithubClearProjectTokenErrors];
export type GithubClearProjectTokenResponses = {
    /**
     * Successful response
     */
    200: {
        hasProjectToken: boolean;
    };
};
export type GithubClearProjectTokenResponse = GithubClearProjectTokenResponses[keyof GithubClearProjectTokenResponses];
export type GithubConnectRepoData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        accessToken?: string;
        repo: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo/connect";
};
export type GithubConnectRepoErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubConnectRepoError = GithubConnectRepoErrors[keyof GithubConnectRepoErrors];
export type GithubConnectRepoResponses = {
    /**
     * Successful response
     */
    200: {
        connectedByUserId: string | null;
        createdAt: string;
        defaultBranch: string | null;
        description: string | null;
        fullName: string;
        hasProjectToken: boolean;
        htmlUrl: string;
        id: string;
        isPrivate: boolean;
        name: string;
        owner: string;
        projectId: string;
        tokenUpdatedAt: string | null;
        updatedAt: string;
        verifiedAt: string | null;
    };
};
export type GithubConnectRepoResponse = GithubConnectRepoResponses[keyof GithubConnectRepoResponses];
export type GithubDisconnectRepoData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        deleteLinks?: boolean;
    };
    path?: never;
    query?: never;
    url: "/github/repo/disconnect";
};
export type GithubDisconnectRepoErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubDisconnectRepoError = GithubDisconnectRepoErrors[keyof GithubDisconnectRepoErrors];
export type GithubDisconnectRepoResponses = {
    /**
     * Successful response
     */
    200: {
        deletedLinks: number;
        disconnected: boolean;
    };
};
export type GithubDisconnectRepoResponse = GithubDisconnectRepoResponses[keyof GithubDisconnectRepoResponses];
export type GithubFindObjectData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        objectType: "PullRequest" | "Issue" | "Commit";
        ref: string;
        repo?: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo/object";
};
export type GithubFindObjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubFindObjectError = GithubFindObjectErrors[keyof GithubFindObjectErrors];
export type GithubFindObjectResponses = {
    /**
     * Successful response
     */
    200: {
        author: string | null;
        fullName: string;
        objectType: string;
        ref: string;
        state: string | null;
        title: string | null;
        updatedAt: string | null;
        url: string;
    };
};
export type GithubFindObjectResponse = GithubFindObjectResponses[keyof GithubFindObjectResponses];
export type GithubGetRepoData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo";
};
export type GithubGetRepoErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubGetRepoError = GithubGetRepoErrors[keyof GithubGetRepoErrors];
export type GithubGetRepoResponses = {
    /**
     * Successful response
     */
    200: {
        canStoreProjectToken: boolean;
        legacyRepoUrl: string | null;
        repo: {
            connectedByUserId: string | null;
            createdAt: string;
            defaultBranch: string | null;
            description: string | null;
            fullName: string;
            hasProjectToken: boolean;
            htmlUrl: string;
            id: string;
            isPrivate: boolean;
            name: string;
            owner: string;
            projectId: string;
            tokenUpdatedAt: string | null;
            updatedAt: string;
            verifiedAt: string | null;
        } | null;
        tokenSource: "project" | "owner-oauth" | "none";
    };
};
export type GithubGetRepoResponse = GithubGetRepoResponses[keyof GithubGetRepoResponses];
export type GithubLinkObjectData = {
    body: {
        entryId?: string;
        objectType: "PullRequest" | "Issue" | "Commit";
        ref: string;
        repo?: string;
        taskId?: string;
        verify?: boolean;
    };
    path?: never;
    query?: never;
    url: "/github/links";
};
export type GithubLinkObjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubLinkObjectError = GithubLinkObjectErrors[keyof GithubLinkObjectErrors];
export type GithubLinkObjectResponses = {
    /**
     * Successful response
     */
    200: {
        author: string | null;
        createdAt: string;
        createdByUserId: string | null;
        entryId: string | null;
        fullName: string;
        id: string;
        objectType: string;
        owner: string;
        projectId: string;
        ref: string;
        repo: string;
        state: string | null;
        syncedAt: string | null;
        taskId: string | null;
        title: string | null;
        updatedAt: string;
        url: string;
    };
};
export type GithubLinkObjectResponse = GithubLinkObjectResponses[keyof GithubLinkObjectResponses];
export type GithubListLinksData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        entryId?: string;
        objectType?: "PullRequest" | "Issue" | "Commit";
        taskId?: string;
    };
    path?: never;
    query?: never;
    url: "/github/links/list";
};
export type GithubListLinksErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubListLinksError = GithubListLinksErrors[keyof GithubListLinksErrors];
export type GithubListLinksResponses = {
    /**
     * Successful response
     */
    200: Array<{
        author: string | null;
        createdAt: string;
        createdByUserId: string | null;
        entryId: string | null;
        fullName: string;
        id: string;
        objectType: string;
        owner: string;
        projectId: string;
        ref: string;
        repo: string;
        state: string | null;
        syncedAt: string | null;
        taskId: string | null;
        title: string | null;
        updatedAt: string;
        url: string;
    }>;
};
export type GithubListLinksResponse = GithubListLinksResponses[keyof GithubListLinksResponses];
export type GithubListRepoObjectsData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        limit?: number;
        objectType: "PullRequest" | "Issue" | "Commit";
        repo?: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo/objects";
};
export type GithubListRepoObjectsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubListRepoObjectsError = GithubListRepoObjectsErrors[keyof GithubListRepoObjectsErrors];
export type GithubListRepoObjectsResponses = {
    /**
     * Successful response
     */
    200: Array<{
        author: string | null;
        fullName: string;
        objectType: string;
        ref: string;
        state: string | null;
        title: string | null;
        updatedAt: string | null;
        url: string;
    }>;
};
export type GithubListRepoObjectsResponse = GithubListRepoObjectsResponses[keyof GithubListRepoObjectsResponses];
export type GithubRefreshLinkData = {
    body: {
        linkId: string;
    };
    path?: never;
    query?: never;
    url: "/github/links/refresh";
};
export type GithubRefreshLinkErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubRefreshLinkError = GithubRefreshLinkErrors[keyof GithubRefreshLinkErrors];
export type GithubRefreshLinkResponses = {
    /**
     * Successful response
     */
    200: {
        author: string | null;
        createdAt: string;
        createdByUserId: string | null;
        entryId: string | null;
        fullName: string;
        id: string;
        objectType: string;
        owner: string;
        projectId: string;
        ref: string;
        repo: string;
        state: string | null;
        syncedAt: string | null;
        taskId: string | null;
        title: string | null;
        updatedAt: string;
        url: string;
    };
};
export type GithubRefreshLinkResponse = GithubRefreshLinkResponses[keyof GithubRefreshLinkResponses];
export type GithubSearchReposData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        limit?: number;
        query?: string;
    };
    path?: never;
    query?: never;
    url: "/github/repos/search";
};
export type GithubSearchReposErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubSearchReposError = GithubSearchReposErrors[keyof GithubSearchReposErrors];
export type GithubSearchReposResponses = {
    /**
     * Successful response
     */
    200: Array<{
        description: string | null;
        fullName: string;
        htmlUrl: string;
        isPrivate: boolean;
        name: string;
        owner: string;
        updatedAt: string | null;
    }>;
};
export type GithubSearchReposResponse = GithubSearchReposResponses[keyof GithubSearchReposResponses];
export type GithubSetProjectTokenData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        accessToken: string;
    };
    path?: never;
    query?: never;
    url: "/github/repo/token";
};
export type GithubSetProjectTokenErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubSetProjectTokenError = GithubSetProjectTokenErrors[keyof GithubSetProjectTokenErrors];
export type GithubSetProjectTokenResponses = {
    /**
     * Successful response
     */
    200: {
        hasProjectToken: boolean;
        login: string | null;
    };
};
export type GithubSetProjectTokenResponse = GithubSetProjectTokenResponses[keyof GithubSetProjectTokenResponses];
export type GithubUnlinkObjectData = {
    body: {
        linkId: string;
    };
    path?: never;
    query?: never;
    url: "/github/links/unlink";
};
export type GithubUnlinkObjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type GithubUnlinkObjectError = GithubUnlinkObjectErrors[keyof GithubUnlinkObjectErrors];
export type GithubUnlinkObjectResponses = {
    /**
     * Successful response
     */
    200: {
        linkId: string;
        unlinked: boolean;
    };
};
export type GithubUnlinkObjectResponse = GithubUnlinkObjectResponses[keyof GithubUnlinkObjectResponses];
export type MemoryCreateData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            body: string;
            kind?: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned?: boolean;
            tags?: Array<string>;
            title: string;
        };
        supersedesMemoryId?: string;
    };
    path?: never;
    query?: never;
    url: "/memories";
};
export type MemoryCreateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryCreateError = MemoryCreateErrors[keyof MemoryCreateErrors];
export type MemoryCreateResponses = {
    /**
     * Successful response
     */
    200: {
        memory: {
            authorKind: "User" | "Agent";
            authorName: string | null;
            createdAt: string;
            id: string;
            kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned: boolean;
            projectId: string;
            tags: Array<string>;
            title: string;
            updatedAt: string;
            verifiedAt: string | null;
            verifiedCount: number;
            body: string;
            supersededBy: Array<{
                id: string;
                title: string;
            }>;
            supersedes: {
                id: string;
                title: string;
            } | null;
        };
        similar: Array<{
            id: string;
            title: string;
        }>;
    };
};
export type MemoryCreateResponse = MemoryCreateResponses[keyof MemoryCreateResponses];
export type MemoryDeleteMemoryData = {
    body?: never;
    path?: never;
    query: {
        memoryId: string;
    };
    url: "/memories/delete";
};
export type MemoryDeleteMemoryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryDeleteMemoryError = MemoryDeleteMemoryErrors[keyof MemoryDeleteMemoryErrors];
export type MemoryDeleteMemoryResponses = {
    /**
     * Successful response
     */
    200: {
        success: boolean;
    };
};
export type MemoryDeleteMemoryResponse = MemoryDeleteMemoryResponses[keyof MemoryDeleteMemoryResponses];
export type MemoryGetData = {
    body: {
        memoryId: string;
    };
    path?: never;
    query?: never;
    url: "/memories/get";
};
export type MemoryGetErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryGetError = MemoryGetErrors[keyof MemoryGetErrors];
export type MemoryGetResponses = {
    /**
     * Successful response
     */
    200: {
        authorKind: "User" | "Agent";
        authorName: string | null;
        createdAt: string;
        id: string;
        kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
        pinned: boolean;
        projectId: string;
        tags: Array<string>;
        title: string;
        updatedAt: string;
        verifiedAt: string | null;
        verifiedCount: number;
        body: string;
        supersededBy: Array<{
            id: string;
            title: string;
        }>;
        supersedes: {
            id: string;
            title: string;
        } | null;
    };
};
export type MemoryGetResponse = MemoryGetResponses[keyof MemoryGetResponses];
export type MemoryGetInstructionsData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/agents/instructions/get";
};
export type MemoryGetInstructionsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryGetInstructionsError = MemoryGetInstructionsErrors[keyof MemoryGetInstructionsErrors];
export type MemoryGetInstructionsResponses = {
    /**
     * Successful response
     */
    200: {
        memoryCount: number;
        pinnedMemories: Array<{
            authorKind: "User" | "Agent";
            authorName: string | null;
            createdAt: string;
            id: string;
            kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned: boolean;
            projectId: string;
            tags: Array<string>;
            title: string;
            updatedAt: string;
            verifiedAt: string | null;
            verifiedCount: number;
            body: string;
        }>;
        projectId: string;
        projectName: string;
        systemPrompt: string | null;
        systemPromptUpdatedAt: string | null;
        tags: Array<{
            count: number;
            tag: string;
        }>;
    };
};
export type MemoryGetInstructionsResponse = MemoryGetInstructionsResponses[keyof MemoryGetInstructionsResponses];
export type MemoryListData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        kinds?: Array<"Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight">;
        limit?: number;
        pinnedOnly?: boolean;
        tags?: Array<string>;
    };
    path?: never;
    query?: never;
    url: "/memories/list";
};
export type MemoryListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryListError = MemoryListErrors[keyof MemoryListErrors];
export type MemoryListResponses = {
    /**
     * Successful response
     */
    200: {
        memories: Array<{
            authorKind: "User" | "Agent";
            authorName: string | null;
            createdAt: string;
            excerpt: string;
            id: string;
            kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned: boolean;
            projectId: string;
            tags: Array<string>;
            title: string;
            truncated: boolean;
            updatedAt: string;
            verifiedAt: string | null;
            verifiedCount: number;
        }>;
        total: number;
    };
};
export type MemoryListResponse = MemoryListResponses[keyof MemoryListResponses];
export type MemorySearchData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        kinds?: Array<"Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight">;
        limit?: number;
        query: string;
        tags?: Array<string>;
    };
    path?: never;
    query?: never;
    url: "/memories/search";
};
export type MemorySearchErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemorySearchError = MemorySearchErrors[keyof MemorySearchErrors];
export type MemorySearchResponses = {
    /**
     * Successful response
     */
    200: {
        matchMode: "strict" | "broad" | "substring" | "none";
        query: string;
        results: Array<{
            authorKind: "User" | "Agent";
            authorName: string | null;
            createdAt: string;
            excerpt: string;
            id: string;
            kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned: boolean;
            projectId: string;
            tags: Array<string>;
            title: string;
            truncated: boolean;
            updatedAt: string;
            verifiedAt: string | null;
            verifiedCount: number;
            rank: number;
        }>;
        searched: number;
    };
};
export type MemorySearchResponse = MemorySearchResponses[keyof MemorySearchResponses];
export type MemorySetInstructionsData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        systemPrompt: string;
    };
    path?: never;
    query?: never;
    url: "/agents/instructions";
};
export type MemorySetInstructionsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemorySetInstructionsError = MemorySetInstructionsErrors[keyof MemorySetInstructionsErrors];
export type MemorySetInstructionsResponses = {
    /**
     * Successful response
     */
    200: {
        systemPrompt: string | null;
        systemPromptUpdatedAt: string | null;
    };
};
export type MemorySetInstructionsResponse = MemorySetInstructionsResponses[keyof MemorySetInstructionsResponses];
export type MemoryUpdateData = {
    body: {
        data: {
            body?: string;
            kind?: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
            pinned?: boolean;
            tags?: Array<string>;
            title?: string;
        };
        memoryId: string;
    };
    path?: never;
    query?: never;
    url: "/memories/update";
};
export type MemoryUpdateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryUpdateError = MemoryUpdateErrors[keyof MemoryUpdateErrors];
export type MemoryUpdateResponses = {
    /**
     * Successful response
     */
    200: {
        authorKind: "User" | "Agent";
        authorName: string | null;
        createdAt: string;
        id: string;
        kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
        pinned: boolean;
        projectId: string;
        tags: Array<string>;
        title: string;
        updatedAt: string;
        verifiedAt: string | null;
        verifiedCount: number;
        body: string;
    };
};
export type MemoryUpdateResponse = MemoryUpdateResponses[keyof MemoryUpdateResponses];
export type MemoryVerifyData = {
    body: {
        memoryId: string;
    };
    path?: never;
    query?: never;
    url: "/memories/verify";
};
export type MemoryVerifyErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type MemoryVerifyError = MemoryVerifyErrors[keyof MemoryVerifyErrors];
export type MemoryVerifyResponses = {
    /**
     * Successful response
     */
    200: {
        authorKind: "User" | "Agent";
        authorName: string | null;
        createdAt: string;
        id: string;
        kind: "Gotcha" | "Convention" | "Decision" | "Reference" | "Runbook" | "Insight";
        pinned: boolean;
        projectId: string;
        tags: Array<string>;
        title: string;
        updatedAt: string;
        verifiedAt: string | null;
        verifiedCount: number;
        body: string;
    };
};
export type MemoryVerifyResponse = MemoryVerifyResponses[keyof MemoryVerifyResponses];
export type PolarGetBillingStateData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/polar/billing-state";
};
export type PolarGetBillingStateErrors = {
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type PolarGetBillingStateError = PolarGetBillingStateErrors[keyof PolarGetBillingStateErrors];
export type PolarGetBillingStateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectCreateData = {
    body: {
        contentType?: "Changelogs" | "Entries" | "Both";
        description?: string;
        emoji?: string;
        githubRepoUrl?: string | "";
        name: string;
    };
    path?: never;
    query?: never;
    url: "/projects";
};
export type ProjectCreateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectCreateError = ProjectCreateErrors[keyof ProjectCreateErrors];
export type ProjectCreateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectDeleteData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/projects/delete";
};
export type ProjectDeleteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectDeleteError = ProjectDeleteErrors[keyof ProjectDeleteErrors];
export type ProjectDeleteResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetByIdData = {
    body: {
        id: string;
    };
    path?: never;
    query?: never;
    url: "/projects/get";
};
export type ProjectGetByIdErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetByIdError = ProjectGetByIdErrors[keyof ProjectGetByIdErrors];
export type ProjectGetByIdResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetChangelogsInVersionRangeData = {
    body: {
        projectSlug: string;
        username: string;
        versionFrom: string;
        versionTo: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/changelogs/range";
};
export type ProjectGetChangelogsInVersionRangeErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetChangelogsInVersionRangeError = ProjectGetChangelogsInVersionRangeErrors[keyof ProjectGetChangelogsInVersionRangeErrors];
export type ProjectGetChangelogsInVersionRangeResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetGitHubYearlyActivityData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/github/yearly";
};
export type ProjectGetGitHubYearlyActivityErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetGitHubYearlyActivityError = ProjectGetGitHubYearlyActivityErrors[keyof ProjectGetGitHubYearlyActivityErrors];
export type ProjectGetGitHubYearlyActivityResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicChangelogData = {
    body: {
        changelogSlug: string;
        preview?: boolean;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/changelog";
};
export type ProjectGetPublicChangelogErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicChangelogError = ProjectGetPublicChangelogErrors[keyof ProjectGetPublicChangelogErrors];
export type ProjectGetPublicChangelogResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicChangelogByVersionData = {
    body: {
        projectSlug: string;
        username: string;
        version: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/changelog/version";
};
export type ProjectGetPublicChangelogByVersionErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicChangelogByVersionError = ProjectGetPublicChangelogByVersionErrors[keyof ProjectGetPublicChangelogByVersionErrors];
export type ProjectGetPublicChangelogByVersionResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicChangelogsData = {
    body: {
        cursor?: number;
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/changelogs";
};
export type ProjectGetPublicChangelogsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicChangelogsError = ProjectGetPublicChangelogsErrors[keyof ProjectGetPublicChangelogsErrors];
export type ProjectGetPublicChangelogsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicEntriesData = {
    body: {
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/entries";
};
export type ProjectGetPublicEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicEntriesError = ProjectGetPublicEntriesErrors[keyof ProjectGetPublicEntriesErrors];
export type ProjectGetPublicEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicEntryData = {
    body: {
        entrySlug: string;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/entry";
};
export type ProjectGetPublicEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicEntryError = ProjectGetPublicEntryErrors[keyof ProjectGetPublicEntryErrors];
export type ProjectGetPublicEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectGetPublicProjectData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/projects/public/get";
};
export type ProjectGetPublicProjectErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGetPublicProjectError = ProjectGetPublicProjectErrors[keyof ProjectGetPublicProjectErrors];
export type ProjectGetPublicProjectResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectListData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: never;
    url: "/projects/list";
};
export type ProjectListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectListError = ProjectListErrors[keyof ProjectListErrors];
export type ProjectListResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectUpdateData = {
    body: {
        contentType?: "Changelogs" | "Entries" | "Both";
        description?: string;
        emoji?: string;
        githubRepoUrl?: string | "";
        id: string;
        name?: string;
        showChangelogs?: boolean;
        showDiscussions?: boolean;
        showFeatures?: boolean;
        showGallery?: boolean;
        showRequests?: boolean;
        showRoadmap?: boolean;
        showTasks?: boolean;
        visibility?: "Public" | "Private";
    };
    path?: never;
    query?: never;
    url: "/projects/update";
};
export type ProjectUpdateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectUpdateError = ProjectUpdateErrors[keyof ProjectUpdateErrors];
export type ProjectUpdateResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type ProjectBrandKitClearAssetData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            slotId: string;
        };
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/clear-asset";
};
export type ProjectBrandKitClearAssetErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitClearAssetError = ProjectBrandKitClearAssetErrors[keyof ProjectBrandKitClearAssetErrors];
export type ProjectBrandKitClearAssetResponses = {
    /**
     * Successful response
     */
    200: {
        assets: Array<{
            alt: string | null;
            imageUrl: string;
            slotId: string;
            updatedAt: string;
        }>;
        fields: Array<{
            fieldId: string;
            updatedAt: string;
            value: string;
        }>;
        filledAssetSlotCount: number;
        filledFieldCount: number;
        projectId: string;
    };
};
export type ProjectBrandKitClearAssetResponse = ProjectBrandKitClearAssetResponses[keyof ProjectBrandKitClearAssetResponses];
export type ProjectBrandKitGetBrandKitData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/get";
};
export type ProjectBrandKitGetBrandKitErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitGetBrandKitError = ProjectBrandKitGetBrandKitErrors[keyof ProjectBrandKitGetBrandKitErrors];
export type ProjectBrandKitGetBrandKitResponses = {
    /**
     * Successful response
     */
    200: {
        assets: Array<{
            alt: string | null;
            imageUrl: string;
            slotId: string;
            updatedAt: string;
        }>;
        fields: Array<{
            fieldId: string;
            updatedAt: string;
            value: string;
        }>;
        filledAssetSlotCount: number;
        filledFieldCount: number;
        projectId: string;
    };
};
export type ProjectBrandKitGetBrandKitResponse = ProjectBrandKitGetBrandKitResponses[keyof ProjectBrandKitGetBrandKitResponses];
export type ProjectBrandKitGetCatalogueData = {
    body: {
        sectionId?: string;
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/catalogue";
};
export type ProjectBrandKitGetCatalogueErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitGetCatalogueError = ProjectBrandKitGetCatalogueErrors[keyof ProjectBrandKitGetCatalogueErrors];
export type ProjectBrandKitGetCatalogueResponses = {
    /**
     * Successful response
     */
    200: {
        assetSlotCount: number;
        fieldCount: number;
        sections: Array<{
            assets: Array<{
                description: string;
                height: number | null;
                id: string;
                label: string;
                note: string | null;
                sectionId: string;
                visibility: "private" | "public";
                width: number | null;
            }>;
            description: string;
            fields: Array<{
                description: string;
                id: string;
                kind: "color" | "handle" | "longText" | "text" | "url";
                label: string;
                maxLength: number;
                placeholder: string | null;
                sectionId: string;
                visibility: "private" | "public";
            }>;
            id: string;
            label: string;
        }>;
    };
};
export type ProjectBrandKitGetCatalogueResponse = ProjectBrandKitGetCatalogueResponses[keyof ProjectBrandKitGetCatalogueResponses];
export type ProjectBrandKitGetPublicBrandKitData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/public/get";
};
export type ProjectBrandKitGetPublicBrandKitErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitGetPublicBrandKitError = ProjectBrandKitGetPublicBrandKitErrors[keyof ProjectBrandKitGetPublicBrandKitErrors];
export type ProjectBrandKitGetPublicBrandKitResponses = {
    /**
     * Successful response
     */
    200: {
        assets: Array<{
            alt: string | null;
            imageUrl: string;
            slotId: string;
        }>;
        fields: Array<{
            fieldId: string;
            value: string;
        }>;
        filledAssetSlotCount: number;
        filledFieldCount: number;
        projectName: string;
        projectSlug: string;
    };
};
export type ProjectBrandKitGetPublicBrandKitResponse = ProjectBrandKitGetPublicBrandKitResponses[keyof ProjectBrandKitGetPublicBrandKitResponses];
export type ProjectBrandKitSetAssetData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            alt?: string;
            imageId: string;
            slotId: string;
        };
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/set-asset";
};
export type ProjectBrandKitSetAssetErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitSetAssetError = ProjectBrandKitSetAssetErrors[keyof ProjectBrandKitSetAssetErrors];
export type ProjectBrandKitSetAssetResponses = {
    /**
     * Successful response
     */
    200: {
        assets: Array<{
            alt: string | null;
            imageUrl: string;
            slotId: string;
            updatedAt: string;
        }>;
        fields: Array<{
            fieldId: string;
            updatedAt: string;
            value: string;
        }>;
        filledAssetSlotCount: number;
        filledFieldCount: number;
        projectId: string;
    };
};
export type ProjectBrandKitSetAssetResponse = ProjectBrandKitSetAssetResponses[keyof ProjectBrandKitSetAssetResponses];
export type ProjectBrandKitSetFieldData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            fieldId: string;
            value: string;
        };
    };
    path?: never;
    query?: never;
    url: "/project-brand-kit/set-field";
};
export type ProjectBrandKitSetFieldErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectBrandKitSetFieldError = ProjectBrandKitSetFieldErrors[keyof ProjectBrandKitSetFieldErrors];
export type ProjectBrandKitSetFieldResponses = {
    /**
     * Successful response
     */
    200: {
        assets: Array<{
            alt: string | null;
            imageUrl: string;
            slotId: string;
            updatedAt: string;
        }>;
        fields: Array<{
            fieldId: string;
            updatedAt: string;
            value: string;
        }>;
        filledAssetSlotCount: number;
        filledFieldCount: number;
        projectId: string;
    };
};
export type ProjectBrandKitSetFieldResponse = ProjectBrandKitSetFieldResponses[keyof ProjectBrandKitSetFieldResponses];
export type ProjectCompletionGetCatalogueData = {
    body: {
        groupId?: string;
    };
    path?: never;
    query?: never;
    url: "/project-completion/catalogue";
};
export type ProjectCompletionGetCatalogueErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectCompletionGetCatalogueError = ProjectCompletionGetCatalogueErrors[keyof ProjectCompletionGetCatalogueErrors];
export type ProjectCompletionGetCatalogueResponses = {
    /**
     * Successful response
     */
    200: {
        groups: Array<{
            description: string;
            id: string;
            items: Array<{
                automaticHint: string | null;
                description: string;
                essential: boolean;
                groupId: string;
                id: string;
                isAutomatic: boolean;
                label: string;
            }>;
            label: string;
        }>;
        itemCount: number;
    };
};
export type ProjectCompletionGetCatalogueResponse = ProjectCompletionGetCatalogueResponses[keyof ProjectCompletionGetCatalogueResponses];
export type ProjectCompletionGetProgressData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/project-completion/progress";
};
export type ProjectCompletionGetProgressErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectCompletionGetProgressError = ProjectCompletionGetProgressErrors[keyof ProjectCompletionGetProgressErrors];
export type ProjectCompletionGetProgressResponses = {
    /**
     * Successful response
     */
    200: {
        applicableCount: number;
        automaticSkippedItemIds: Array<string>;
        doneCount: number;
        essentialDoneCount: number;
        essentialTotalCount: number;
        groups: Array<{
            applicableCount: number;
            description: string;
            doneCount: number;
            groupId: string;
            items: Array<{
                automaticHint: string | null;
                description: string;
                essential: boolean;
                groupId: string;
                id: string;
                isAutomatic: boolean;
                label: string;
                evidenceSatisfied: boolean;
                status: "Todo" | "Done" | "NotApplicable";
            }>;
            label: string;
            notApplicableCount: number;
            percentage: number;
            totalCount: number;
        }>;
        notApplicableCount: number;
        percentage: number;
        projectId: string;
        totalCount: number;
    };
};
export type ProjectCompletionGetProgressResponse = ProjectCompletionGetProgressResponses[keyof ProjectCompletionGetProgressResponses];
export type ProjectCompletionSetGroupData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            groupId: string;
            status: "Todo" | "Done" | "NotApplicable";
        };
    };
    path?: never;
    query?: never;
    url: "/project-completion/set-group";
};
export type ProjectCompletionSetGroupErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectCompletionSetGroupError = ProjectCompletionSetGroupErrors[keyof ProjectCompletionSetGroupErrors];
export type ProjectCompletionSetGroupResponses = {
    /**
     * Successful response
     */
    200: {
        applicableCount: number;
        automaticSkippedItemIds: Array<string>;
        doneCount: number;
        essentialDoneCount: number;
        essentialTotalCount: number;
        groups: Array<{
            applicableCount: number;
            description: string;
            doneCount: number;
            groupId: string;
            items: Array<{
                automaticHint: string | null;
                description: string;
                essential: boolean;
                groupId: string;
                id: string;
                isAutomatic: boolean;
                label: string;
                evidenceSatisfied: boolean;
                status: "Todo" | "Done" | "NotApplicable";
            }>;
            label: string;
            notApplicableCount: number;
            percentage: number;
            totalCount: number;
        }>;
        notApplicableCount: number;
        percentage: number;
        projectId: string;
        totalCount: number;
    };
};
export type ProjectCompletionSetGroupResponse = ProjectCompletionSetGroupResponses[keyof ProjectCompletionSetGroupResponses];
export type ProjectCompletionSetItemData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            itemId: string;
            status: "Todo" | "Done" | "NotApplicable";
        };
    };
    path?: never;
    query?: never;
    url: "/project-completion/set-item";
};
export type ProjectCompletionSetItemErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectCompletionSetItemError = ProjectCompletionSetItemErrors[keyof ProjectCompletionSetItemErrors];
export type ProjectCompletionSetItemResponses = {
    /**
     * Successful response
     */
    200: {
        applicableCount: number;
        automaticSkippedItemIds: Array<string>;
        doneCount: number;
        essentialDoneCount: number;
        essentialTotalCount: number;
        groups: Array<{
            applicableCount: number;
            description: string;
            doneCount: number;
            groupId: string;
            items: Array<{
                automaticHint: string | null;
                description: string;
                essential: boolean;
                groupId: string;
                id: string;
                isAutomatic: boolean;
                label: string;
                evidenceSatisfied: boolean;
                status: "Todo" | "Done" | "NotApplicable";
            }>;
            label: string;
            notApplicableCount: number;
            percentage: number;
            totalCount: number;
        }>;
        notApplicableCount: number;
        percentage: number;
        projectId: string;
        totalCount: number;
    };
};
export type ProjectCompletionSetItemResponse = ProjectCompletionSetItemResponses[keyof ProjectCompletionSetItemResponses];
export type ProjectGalleryAddItemsData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            imageIds: Array<string>;
        };
    };
    path?: never;
    query?: never;
    url: "/project-gallery/add-items";
};
export type ProjectGalleryAddItemsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryAddItemsError = ProjectGalleryAddItemsErrors[keyof ProjectGalleryAddItemsErrors];
export type ProjectGalleryAddItemsResponses = {
    /**
     * Successful response
     */
    200: {
        added: Array<{
            caption: string | null;
            createdAt: string;
            fileName: string | null;
            id: string;
            imageId: string;
            key: string;
            mediaType: string | null;
            mimeType: string | null;
            order: number;
            published: boolean;
        }>;
        items: Array<{
            caption: string | null;
            createdAt: string;
            fileName: string | null;
            id: string;
            imageId: string;
            key: string;
            mediaType: string | null;
            mimeType: string | null;
            order: number;
            published: boolean;
        }>;
        skippedImageIds: Array<string>;
    };
};
export type ProjectGalleryAddItemsResponse = ProjectGalleryAddItemsResponses[keyof ProjectGalleryAddItemsResponses];
export type ProjectGalleryGetPublicGalleryData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/project-gallery/public/get";
};
export type ProjectGalleryGetPublicGalleryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryGetPublicGalleryError = ProjectGalleryGetPublicGalleryErrors[keyof ProjectGalleryGetPublicGalleryErrors];
export type ProjectGalleryGetPublicGalleryResponses = {
    /**
     * Successful response
     */
    200: Array<{
        caption: string | null;
        createdAt: string;
        fileName: string | null;
        id: string;
        key: string;
        mediaType: string | null;
        mimeType: string | null;
        order: number;
    }>;
};
export type ProjectGalleryGetPublicGalleryResponse = ProjectGalleryGetPublicGalleryResponses[keyof ProjectGalleryGetPublicGalleryResponses];
export type ProjectGalleryListData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/project-gallery/list";
};
export type ProjectGalleryListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryListError = ProjectGalleryListErrors[keyof ProjectGalleryListErrors];
export type ProjectGalleryListResponses = {
    /**
     * Successful response
     */
    200: Array<{
        caption: string | null;
        createdAt: string;
        fileName: string | null;
        id: string;
        imageId: string;
        key: string;
        mediaType: string | null;
        mimeType: string | null;
        order: number;
        published: boolean;
    }>;
};
export type ProjectGalleryListResponse = ProjectGalleryListResponses[keyof ProjectGalleryListResponses];
export type ProjectGalleryRemoveItemData = {
    body: {
        itemId: string;
    };
    path?: never;
    query?: never;
    url: "/project-gallery/remove-item";
};
export type ProjectGalleryRemoveItemErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryRemoveItemError = ProjectGalleryRemoveItemErrors[keyof ProjectGalleryRemoveItemErrors];
export type ProjectGalleryRemoveItemResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type ProjectGalleryRemoveItemResponse = ProjectGalleryRemoveItemResponses[keyof ProjectGalleryRemoveItemResponses];
export type ProjectGalleryReorderData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        data: {
            itemIds: Array<string>;
        };
    };
    path?: never;
    query?: never;
    url: "/project-gallery/reorder";
};
export type ProjectGalleryReorderErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryReorderError = ProjectGalleryReorderErrors[keyof ProjectGalleryReorderErrors];
export type ProjectGalleryReorderResponses = {
    /**
     * Successful response
     */
    200: Array<{
        caption: string | null;
        createdAt: string;
        fileName: string | null;
        id: string;
        imageId: string;
        key: string;
        mediaType: string | null;
        mimeType: string | null;
        order: number;
        published: boolean;
    }>;
};
export type ProjectGalleryReorderResponse = ProjectGalleryReorderResponses[keyof ProjectGalleryReorderResponses];
export type ProjectGalleryUpdateItemData = {
    body: {
        caption?: string | null;
        itemId: string;
        published?: boolean;
    };
    path?: never;
    query?: never;
    url: "/project-gallery/update-item";
};
export type ProjectGalleryUpdateItemErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type ProjectGalleryUpdateItemError = ProjectGalleryUpdateItemErrors[keyof ProjectGalleryUpdateItemErrors];
export type ProjectGalleryUpdateItemResponses = {
    /**
     * Successful response
     */
    200: {
        caption: string | null;
        createdAt: string;
        fileName: string | null;
        id: string;
        imageId: string;
        key: string;
        mediaType: string | null;
        mimeType: string | null;
        order: number;
        published: boolean;
    };
};
export type ProjectGalleryUpdateItemResponse = ProjectGalleryUpdateItemResponses[keyof ProjectGalleryUpdateItemResponses];
export type RequestApproveRequestData = {
    body: {
        projectSlug: string;
        requestId: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/approve";
};
export type RequestApproveRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestApproveRequestError = RequestApproveRequestErrors[keyof RequestApproveRequestErrors];
export type RequestApproveRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestCreateCommentData = {
    body: {
        imageIds?: Array<string>;
        requestId: string;
        text: string;
    };
    path?: never;
    query?: never;
    url: "/requests/comment";
};
export type RequestCreateCommentErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestCreateCommentError = RequestCreateCommentErrors[keyof RequestCreateCommentErrors];
export type RequestCreateCommentResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestCreatePublicRequestData = {
    body: {
        activationId?: string;
        data: {
            categoryId?: string;
            content: string;
            imageIds?: Array<string>;
            title: string;
        };
        guestEmail?: string;
        projectSlug: string;
        reporterToken?: string;
        token?: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests";
};
export type RequestCreatePublicRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestCreatePublicRequestError = RequestCreatePublicRequestErrors[keyof RequestCreatePublicRequestErrors];
export type RequestCreatePublicRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestDeleteRequestData = {
    body?: never;
    path?: never;
    query: {
        projectSlug: string;
        requestId: string;
        username: string;
    };
    url: "/requests/delete";
};
export type RequestDeleteRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestDeleteRequestError = RequestDeleteRequestErrors[keyof RequestDeleteRequestErrors];
export type RequestDeleteRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestGetPublicRequestData = {
    body: {
        projectSlug: string;
        requestId: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/public/get";
};
export type RequestGetPublicRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestGetPublicRequestError = RequestGetPublicRequestErrors[keyof RequestGetPublicRequestErrors];
export type RequestGetPublicRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestGetPublicRequestCategoriesData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/public/categories";
};
export type RequestGetPublicRequestCategoriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestGetPublicRequestCategoriesError = RequestGetPublicRequestCategoriesErrors[keyof RequestGetPublicRequestCategoriesErrors];
export type RequestGetPublicRequestCategoriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestGetPublicRequestsData = {
    body: {
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/public/list";
};
export type RequestGetPublicRequestsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestGetPublicRequestsError = RequestGetPublicRequestsErrors[keyof RequestGetPublicRequestsErrors];
export type RequestGetPublicRequestsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestGetSizzyEmailData = {
    body: {
        activationId: string;
    };
    path?: never;
    query?: never;
    url: "/requests/public/sizzy-email";
};
export type RequestGetSizzyEmailErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestGetSizzyEmailError = RequestGetSizzyEmailErrors[keyof RequestGetSizzyEmailErrors];
export type RequestGetSizzyEmailResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestMergeRequestsData = {
    body: {
        sourceRequestIds: Array<string>;
        targetRequestId: string;
    };
    path?: never;
    query?: never;
    url: "/requests/merge";
};
export type RequestMergeRequestsErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestMergeRequestsError = RequestMergeRequestsErrors[keyof RequestMergeRequestsErrors];
export type RequestMergeRequestsResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestToggleCloseRequestData = {
    body: {
        projectSlug: string;
        requestId: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/toggle-close";
};
export type RequestToggleCloseRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestToggleCloseRequestError = RequestToggleCloseRequestErrors[keyof RequestToggleCloseRequestErrors];
export type RequestToggleCloseRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RequestToggleLockRequestData = {
    body: {
        projectSlug: string;
        requestId: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/requests/toggle-lock";
};
export type RequestToggleLockRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RequestToggleLockRequestError = RequestToggleLockRequestErrors[keyof RequestToggleLockRequestErrors];
export type RequestToggleLockRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapCreateRoadmapEntryData = {
    body: {
        categoryId?: string;
        content?: string;
        projectId: string;
        statusId?: string;
        title: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/entries";
};
export type RoadmapCreateRoadmapEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapCreateRoadmapEntryError = RoadmapCreateRoadmapEntryErrors[keyof RoadmapCreateRoadmapEntryErrors];
export type RoadmapCreateRoadmapEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapCreateRoadmapEntryFromRequestData = {
    body: {
        closeRequest?: boolean;
        requestId: string;
        statusId?: string;
        title?: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/entries/from-request";
};
export type RoadmapCreateRoadmapEntryFromRequestErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapCreateRoadmapEntryFromRequestError = RoadmapCreateRoadmapEntryFromRequestErrors[keyof RoadmapCreateRoadmapEntryFromRequestErrors];
export type RoadmapCreateRoadmapEntryFromRequestResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapCreateRoadmapStatusData = {
    body: {
        color?: string;
        emoji?: string;
        name: string;
        order?: number;
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/statuses/create";
};
export type RoadmapCreateRoadmapStatusErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapCreateRoadmapStatusError = RoadmapCreateRoadmapStatusErrors[keyof RoadmapCreateRoadmapStatusErrors];
export type RoadmapCreateRoadmapStatusResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapDeleteRoadmapEntryData = {
    body?: never;
    path?: never;
    query: {
        roadmapEntryId: string;
    };
    url: "/roadmap/entries/delete";
};
export type RoadmapDeleteRoadmapEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapDeleteRoadmapEntryError = RoadmapDeleteRoadmapEntryErrors[keyof RoadmapDeleteRoadmapEntryErrors];
export type RoadmapDeleteRoadmapEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapDeleteRoadmapStatusData = {
    body?: never;
    path?: never;
    query: {
        moveEntriesToStatusId?: string;
        statusId: string;
    };
    url: "/roadmap/statuses/delete";
};
export type RoadmapDeleteRoadmapStatusErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapDeleteRoadmapStatusError = RoadmapDeleteRoadmapStatusErrors[keyof RoadmapDeleteRoadmapStatusErrors];
export type RoadmapDeleteRoadmapStatusResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapGetPublicRoadmapEntriesData = {
    body: {
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/public/entries";
};
export type RoadmapGetPublicRoadmapEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapGetPublicRoadmapEntriesError = RoadmapGetPublicRoadmapEntriesErrors[keyof RoadmapGetPublicRoadmapEntriesErrors];
export type RoadmapGetPublicRoadmapEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapGetPublicRoadmapStatusesData = {
    body: {
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/public/statuses";
};
export type RoadmapGetPublicRoadmapStatusesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapGetPublicRoadmapStatusesError = RoadmapGetPublicRoadmapStatusesErrors[keyof RoadmapGetPublicRoadmapStatusesErrors];
export type RoadmapGetPublicRoadmapStatusesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapGetRoadmapEntriesData = {
    body: {
        limit?: number;
        projectId: string;
        statusId?: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/entries/list";
};
export type RoadmapGetRoadmapEntriesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapGetRoadmapEntriesError = RoadmapGetRoadmapEntriesErrors[keyof RoadmapGetRoadmapEntriesErrors];
export type RoadmapGetRoadmapEntriesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapGetRoadmapStatusesData = {
    body: {
        projectId: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/statuses";
};
export type RoadmapGetRoadmapStatusesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapGetRoadmapStatusesError = RoadmapGetRoadmapStatusesErrors[keyof RoadmapGetRoadmapStatusesErrors];
export type RoadmapGetRoadmapStatusesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapUpdateRoadmapEntryData = {
    body: {
        categoryId?: string | null;
        content?: string | null;
        roadmapEntryId: string;
        statusId?: string | null;
        title?: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/entries/update";
};
export type RoadmapUpdateRoadmapEntryErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapUpdateRoadmapEntryError = RoadmapUpdateRoadmapEntryErrors[keyof RoadmapUpdateRoadmapEntryErrors];
export type RoadmapUpdateRoadmapEntryResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type RoadmapUpdateRoadmapStatusData = {
    body: {
        color?: string | null;
        emoji?: string | null;
        name?: string;
        order?: number;
        statusId: string;
    };
    path?: never;
    query?: never;
    url: "/roadmap/statuses/update";
};
export type RoadmapUpdateRoadmapStatusErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type RoadmapUpdateRoadmapStatusError = RoadmapUpdateRoadmapStatusErrors[keyof RoadmapUpdateRoadmapStatusErrors];
export type RoadmapUpdateRoadmapStatusResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type S3ImageDeleteData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/s3-images/delete";
};
export type S3ImageDeleteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type S3ImageDeleteError = S3ImageDeleteErrors[keyof S3ImageDeleteErrors];
export type S3ImageDeleteResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type S3ImageDeleteResponse = S3ImageDeleteResponses[keyof S3ImageDeleteResponses];
export type S3ImageGetByEntryIdData = {
    body: {
        entryId: string;
    };
    path?: never;
    query?: never;
    url: "/s3-images/by-entry";
};
export type S3ImageGetByEntryIdErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type S3ImageGetByEntryIdError = S3ImageGetByEntryIdErrors[keyof S3ImageGetByEntryIdErrors];
export type S3ImageGetByEntryIdResponses = {
    /**
     * Successful response
     */
    200: Array<{
        id: string;
        key: string;
        type: "image" | "video";
    }>;
};
export type S3ImageGetByEntryIdResponse = S3ImageGetByEntryIdResponses[keyof S3ImageGetByEntryIdResponses];
export type S3ImageGetUploadUrlData = {
    body: {
        contentType: string;
        fileName: string;
    };
    path?: never;
    query?: never;
    url: "/s3-images/upload-url";
};
export type S3ImageGetUploadUrlErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type S3ImageGetUploadUrlError = S3ImageGetUploadUrlErrors[keyof S3ImageGetUploadUrlErrors];
export type S3ImageGetUploadUrlResponses = {
    /**
     * Successful response
     */
    200: {
        key: string;
        uploadUrl: string;
    };
};
export type S3ImageGetUploadUrlResponse = S3ImageGetUploadUrlResponses[keyof S3ImageGetUploadUrlResponses];
export type TaskAttachFilesData = {
    body: {
        imageIds: Array<string>;
        taskId: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/attach-files";
};
export type TaskAttachFilesErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskAttachFilesError = TaskAttachFilesErrors[keyof TaskAttachFilesErrors];
export type TaskAttachFilesResponses = {
    /**
     * Successful response
     */
    200: Array<{
        createdAt: string;
        fileName: string | null;
        id: string;
        key: string;
        mediaType: string | null;
        mimeType: string | null;
    }>;
};
export type TaskAttachFilesResponse = TaskAttachFilesResponses[keyof TaskAttachFilesResponses];
export type TaskClaimNextData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        agent: string;
        statuses?: Array<"Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled">;
    };
    path?: never;
    query?: never;
    url: "/tasks/claim-next";
};
export type TaskClaimNextErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskClaimNextError = TaskClaimNextErrors[keyof TaskClaimNextErrors];
export type TaskClaimNextResponses = {
    /**
     * Successful response
     */
    200: {
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
    } | null;
};
export type TaskClaimNextResponse = TaskClaimNextResponses[keyof TaskClaimNextResponses];
export type TaskCreateData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        assignee?: string;
        data: {
            content?: string;
            imageIds?: Array<string>;
            parentTaskId?: string;
            priority?: "None" | "Low" | "Medium" | "High" | "Urgent";
            public?: boolean;
            status?: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title: string;
            type?: "Bug" | "Improvement" | "Feature";
        };
    };
    path?: never;
    query?: never;
    url: "/tasks";
};
export type TaskCreateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskCreateError = TaskCreateErrors[keyof TaskCreateErrors];
export type TaskCreateResponses = {
    /**
     * Successful response
     */
    200: {
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
    };
};
export type TaskCreateResponse = TaskCreateResponses[keyof TaskCreateResponses];
export type TaskCreateCommentData = {
    body: {
        authorName?: string;
        body: string;
        internal?: boolean;
        taskId: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/comment";
};
export type TaskCreateCommentErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskCreateCommentError = TaskCreateCommentErrors[keyof TaskCreateCommentErrors];
export type TaskCreateCommentResponses = {
    /**
     * Successful response
     */
    200: {
        authorName: string | null;
        body: string;
        createdAt: string;
        id: string;
        internal: boolean;
        kind: "User" | "Agent" | "System";
        taskId: string;
        updatedAt: string;
        user: {
            avatarImageUrl: string | null;
            id: string;
            name: string;
            username: string | null;
        } | null;
        userId: string | null;
    };
};
export type TaskCreateCommentResponse = TaskCreateCommentResponses[keyof TaskCreateCommentResponses];
export type TaskDeleteTaskData = {
    body?: never;
    path?: never;
    query: {
        taskId: string;
    };
    url: "/tasks/delete";
};
export type TaskDeleteTaskErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskDeleteTaskError = TaskDeleteTaskErrors[keyof TaskDeleteTaskErrors];
export type TaskDeleteTaskResponses = {
    /**
     * Successful response
     */
    200: {
        success: boolean;
    };
};
export type TaskDeleteTaskResponse = TaskDeleteTaskResponses[keyof TaskDeleteTaskResponses];
export type TaskGetData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        number?: number;
        taskId?: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/get";
};
export type TaskGetErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskGetError = TaskGetErrors[keyof TaskGetErrors];
export type TaskGetResponses = {
    /**
     * Successful response
     */
    200: {
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
        attachments: Array<{
            createdAt: string;
            fileName: string | null;
            id: string;
            key: string;
            mediaType: string | null;
            mimeType: string | null;
        }>;
        children: Array<{
            assignee: string | null;
            id: string;
            number: number;
            priority: "None" | "Low" | "Medium" | "High" | "Urgent";
            status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title: string;
            type: "Bug" | "Improvement" | "Feature";
        }>;
        comments: Array<{
            authorName: string | null;
            body: string;
            createdAt: string;
            id: string;
            internal: boolean;
            kind: "User" | "Agent" | "System";
            taskId: string;
            updatedAt: string;
            user: {
                avatarImageUrl: string | null;
                id: string;
                name: string;
                username: string | null;
            } | null;
            userId: string | null;
        }>;
        parent: {
            assignee: string | null;
            id: string;
            number: number;
            priority: "None" | "Low" | "Medium" | "High" | "Urgent";
            status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title: string;
            type: "Bug" | "Improvement" | "Feature";
        } | null;
        project: {
            id: string;
            name: string;
            slug: string;
        };
    };
};
export type TaskGetResponse = TaskGetResponses[keyof TaskGetResponses];
export type TaskGetPublicTaskData = {
    body: {
        number: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/public/get";
};
export type TaskGetPublicTaskErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskGetPublicTaskError = TaskGetPublicTaskErrors[keyof TaskGetPublicTaskErrors];
export type TaskGetPublicTaskResponses = {
    /**
     * Successful response
     */
    200: {
        assignee: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        id: string;
        number: number;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
        attachments: Array<{
            createdAt: string;
            fileName: string | null;
            id: string;
            key: string;
            mediaType: string | null;
            mimeType: string | null;
        }>;
        children: Array<{
            assignee: string | null;
            id: string;
            number: number;
            priority: "None" | "Low" | "Medium" | "High" | "Urgent";
            status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title: string;
            type: "Bug" | "Improvement" | "Feature";
        }>;
        comments: Array<{
            authorName: string | null;
            body: string;
            createdAt: string;
            id: string;
            kind: "User" | "Agent" | "System";
            updatedAt: string;
            user: {
                avatarImageUrl: string | null;
                id: string;
                name: string;
                username: string | null;
            } | null;
        }>;
        parent: {
            assignee: string | null;
            id: string;
            number: number;
            priority: "None" | "Low" | "Medium" | "High" | "Urgent";
            status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title: string;
            type: "Bug" | "Improvement" | "Feature";
        } | null;
    };
};
export type TaskGetPublicTaskResponse = TaskGetPublicTaskResponses[keyof TaskGetPublicTaskResponses];
export type TaskGetPublicTasksData = {
    body: {
        limit?: number;
        projectSlug: string;
        username: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/public/list";
};
export type TaskGetPublicTasksErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskGetPublicTasksError = TaskGetPublicTasksErrors[keyof TaskGetPublicTasksErrors];
export type TaskGetPublicTasksResponses = {
    /**
     * Successful response
     */
    200: Array<{
        assignee: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        id: string;
        number: number;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
    }>;
};
export type TaskGetPublicTasksResponse = TaskGetPublicTasksResponses[keyof TaskGetPublicTasksResponses];
export type TaskListData = {
    body: {
        projectId?: string;
        projectSlug?: string;
        username?: string;
        assignee?: string;
        available?: boolean;
        limit?: number;
        statuses?: Array<"Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled">;
        types?: Array<"Bug" | "Improvement" | "Feature">;
    };
    path?: never;
    query?: never;
    url: "/tasks/list";
};
export type TaskListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskListError = TaskListErrors[keyof TaskListErrors];
export type TaskListResponses = {
    /**
     * Successful response
     */
    200: Array<{
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
        childCount: number;
        commentCount: number;
        unfinishedChildCount: number;
    }>;
};
export type TaskListResponse = TaskListResponses[keyof TaskListResponses];
export type TaskListOwnedData = {
    body: {
        assignee?: string;
        limit?: number;
        projectIds?: Array<string>;
        statuses?: Array<"Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled">;
        types?: Array<"Bug" | "Improvement" | "Feature">;
    };
    path?: never;
    query?: never;
    url: "/tasks/owned/list";
};
export type TaskListOwnedErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskListOwnedError = TaskListOwnedErrors[keyof TaskListOwnedErrors];
export type TaskListOwnedResponses = {
    /**
     * Successful response
     */
    200: Array<{
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
        childCount: number;
        commentCount: number;
        unfinishedChildCount: number;
        project: {
            emoji: string | null;
            id: string;
            name: string;
            slug: string;
        };
    }>;
};
export type TaskListOwnedResponse = TaskListOwnedResponses[keyof TaskListOwnedResponses];
export type TaskRemoveFileData = {
    body: {
        imageId: string;
        taskId: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/remove-file";
};
export type TaskRemoveFileErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskRemoveFileError = TaskRemoveFileErrors[keyof TaskRemoveFileErrors];
export type TaskRemoveFileResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type TaskRemoveFileResponse = TaskRemoveFileResponses[keyof TaskRemoveFileResponses];
export type TaskUpdateData = {
    body: {
        data: {
            assignee?: string | null;
            content?: string | null;
            order?: number | null;
            parentTaskId?: string | null;
            priority?: "None" | "Low" | "Medium" | "High" | "Urgent";
            public?: boolean;
            status?: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
            title?: string;
            type?: "Bug" | "Improvement" | "Feature";
        };
        taskId: string;
    };
    path?: never;
    query?: never;
    url: "/tasks/update";
};
export type TaskUpdateErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TaskUpdateError = TaskUpdateErrors[keyof TaskUpdateErrors];
export type TaskUpdateResponses = {
    /**
     * Successful response
     */
    200: {
        assignee: string | null;
        claimedAt: string | null;
        completedAt: string | null;
        content: string | null;
        createdAt: string;
        creatorId: string | null;
        id: string;
        number: number;
        order: number | null;
        parentTaskId: string | null;
        priority: "None" | "Low" | "Medium" | "High" | "Urgent";
        projectId: string;
        public: boolean;
        status: "Backlog" | "Todo" | "InProgress" | "InReview" | "Done" | "Canceled";
        title: string;
        type: "Bug" | "Improvement" | "Feature";
        updatedAt: string;
    };
};
export type TaskUpdateResponse = TaskUpdateResponses[keyof TaskUpdateResponses];
export type TrashListData = {
    body: {
        limit?: number;
        projectId?: string;
    };
    path?: never;
    query?: never;
    url: "/trash/list";
};
export type TrashListErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TrashListError = TrashListErrors[keyof TrashListErrors];
export type TrashListResponses = {
    /**
     * Successful response
     */
    200: Array<{
        cascadedCount: number;
        deletedAt: string;
        id: string;
        kind: "changelog" | "discussion" | "entry" | "project" | "request" | "roadmapEntry" | "task" | "tip";
        projectId: string | null;
        projectName: string | null;
        title: string;
    }>;
};
export type TrashListResponse = TrashListResponses[keyof TrashListResponses];
export type TrashPurgeData = {
    body?: never;
    path?: never;
    query: {
        id: string;
        kind: "changelog" | "discussion" | "entry" | "project" | "request" | "roadmapEntry" | "task" | "tip";
        confirmation: "DELETE PERMANENTLY";
    };
    url: "/trash/purge";
};
export type TrashPurgeErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TrashPurgeError = TrashPurgeErrors[keyof TrashPurgeErrors];
export type TrashPurgeResponses = {
    /**
     * Successful response
     */
    200: {
        success: boolean;
    };
};
export type TrashPurgeResponse = TrashPurgeResponses[keyof TrashPurgeResponses];
export type TrashPurgeManyData = {
    body?: never;
    path?: never;
    query: {
        projectId?: string;
        confirmation: "DELETE PERMANENTLY";
    };
    url: "/trash/purge-many";
};
export type TrashPurgeManyErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TrashPurgeManyError = TrashPurgeManyErrors[keyof TrashPurgeManyErrors];
export type TrashPurgeManyResponses = {
    /**
     * Successful response
     */
    200: {
        processedCount: number;
    };
};
export type TrashPurgeManyResponse = TrashPurgeManyResponses[keyof TrashPurgeManyResponses];
export type TrashRestoreData = {
    body: {
        id: string;
        kind: "changelog" | "discussion" | "entry" | "project" | "request" | "roadmapEntry" | "task" | "tip";
    };
    path?: never;
    query?: never;
    url: "/trash/restore";
};
export type TrashRestoreErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TrashRestoreError = TrashRestoreErrors[keyof TrashRestoreErrors];
export type TrashRestoreResponses = {
    /**
     * Successful response
     */
    200: {
        cascadedCount: number;
        deletedAt: string;
        id: string;
        kind: "changelog" | "discussion" | "entry" | "project" | "request" | "roadmapEntry" | "task" | "tip";
        projectId: string | null;
        projectName: string | null;
        title: string;
    };
};
export type TrashRestoreResponse = TrashRestoreResponses[keyof TrashRestoreResponses];
export type TrashRestoreManyData = {
    body: {
        projectId?: string;
    };
    path?: never;
    query?: never;
    url: "/trash/restore-many";
};
export type TrashRestoreManyErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TrashRestoreManyError = TrashRestoreManyErrors[keyof TrashRestoreManyErrors];
export type TrashRestoreManyResponses = {
    /**
     * Successful response
     */
    200: {
        processedCount: number;
    };
};
export type TrashRestoreManyResponse = TrashRestoreManyResponses[keyof TrashRestoreManyResponses];
export type TypefullyCreateDraftData = {
    body: {
        draftTitle?: string;
        posts: Array<{
            media_ids?: Array<string>;
            text: string;
        }>;
        publishOption?: "draft" | "now" | "next-free-slot";
        scheduledTime?: string;
        socialSetId: string;
    };
    path?: never;
    query?: never;
    url: "/typefully/draft";
};
export type TypefullyCreateDraftErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyCreateDraftError = TypefullyCreateDraftErrors[keyof TypefullyCreateDraftErrors];
export type TypefullyCreateDraftResponses = {
    /**
     * Successful response
     */
    200: {
        [key: string]: unknown;
    };
};
export type TypefullyCreateDraftResponse = TypefullyCreateDraftResponses[keyof TypefullyCreateDraftResponses];
export type TypefullyGetConnectionStatusData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/typefully/connection";
};
export type TypefullyGetConnectionStatusErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyGetConnectionStatusError = TypefullyGetConnectionStatusErrors[keyof TypefullyGetConnectionStatusErrors];
export type TypefullyGetConnectionStatusResponses = {
    /**
     * Successful response
     */
    200: {
        connected: boolean;
    };
};
export type TypefullyGetConnectionStatusResponse = TypefullyGetConnectionStatusResponses[keyof TypefullyGetConnectionStatusResponses];
export type TypefullyGetMeData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/typefully/me";
};
export type TypefullyGetMeErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyGetMeError = TypefullyGetMeErrors[keyof TypefullyGetMeErrors];
export type TypefullyGetMeResponses = {
    /**
     * Successful response
     */
    200: {
        [key: string]: unknown;
    };
};
export type TypefullyGetMeResponse = TypefullyGetMeResponses[keyof TypefullyGetMeResponses];
export type TypefullyGetSocialSetsData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/typefully/social-sets";
};
export type TypefullyGetSocialSetsErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyGetSocialSetsError = TypefullyGetSocialSetsErrors[keyof TypefullyGetSocialSetsErrors];
export type TypefullyGetSocialSetsResponses = {
    /**
     * Successful response
     */
    200: Array<{
        id: string | number;
        name?: string;
        profile_image_url?: string;
        team?: {
            id: string;
            name: string;
        } | null;
        username?: string;
        [key: string]: unknown;
    }>;
};
export type TypefullyGetSocialSetsResponse = TypefullyGetSocialSetsResponses[keyof TypefullyGetSocialSetsResponses];
export type TypefullyRemoveApiKeyData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/typefully/api-key";
};
export type TypefullyRemoveApiKeyErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyRemoveApiKeyError = TypefullyRemoveApiKeyErrors[keyof TypefullyRemoveApiKeyErrors];
export type TypefullyRemoveApiKeyResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type TypefullyRemoveApiKeyResponse = TypefullyRemoveApiKeyResponses[keyof TypefullyRemoveApiKeyResponses];
export type TypefullySetApiKeyData = {
    body: {
        apiKey: string;
    };
    path?: never;
    query?: never;
    url: "/typefully/api-key";
};
export type TypefullySetApiKeyErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullySetApiKeyError = TypefullySetApiKeyErrors[keyof TypefullySetApiKeyErrors];
export type TypefullySetApiKeyResponses = {
    /**
     * Successful response
     */
    200: {
        success: true;
    };
};
export type TypefullySetApiKeyResponse = TypefullySetApiKeyResponses[keyof TypefullySetApiKeyResponses];
export type TypefullyUploadMediaData = {
    body: {
        imageUrl: string;
        socialSetId: string;
    };
    path?: never;
    query?: never;
    url: "/typefully/media";
};
export type TypefullyUploadMediaErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type TypefullyUploadMediaError = TypefullyUploadMediaErrors[keyof TypefullyUploadMediaErrors];
export type TypefullyUploadMediaResponses = {
    /**
     * Successful response
     */
    200: {
        media_id: string;
        result: {
            [key: string]: unknown;
        };
    };
};
export type TypefullyUploadMediaResponse = TypefullyUploadMediaResponses[keyof TypefullyUploadMediaResponses];
export type UserDisconnectAccountData = {
    body?: never;
    path?: never;
    query: {
        providerId: string;
    };
    url: "/users/disconnect-account";
};
export type UserDisconnectAccountErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserDisconnectAccountError = UserDisconnectAccountErrors[keyof UserDisconnectAccountErrors];
export type UserDisconnectAccountResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetCurrentUserData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/me";
};
export type UserGetCurrentUserErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetCurrentUserError = UserGetCurrentUserErrors[keyof UserGetCurrentUserErrors];
export type UserGetCurrentUserResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetMyProfileData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/profile/me";
};
export type UserGetMyProfileErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetMyProfileError = UserGetMyProfileErrors[keyof UserGetMyProfileErrors];
export type UserGetMyProfileResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetPreferencesData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/preferences";
};
export type UserGetPreferencesErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetPreferencesError = UserGetPreferencesErrors[keyof UserGetPreferencesErrors];
export type UserGetPreferencesResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetPublicProfileData = {
    body: {
        username: string;
    };
    path?: never;
    query?: never;
    url: "/users/public/profile";
};
export type UserGetPublicProfileErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetPublicProfileError = UserGetPublicProfileErrors[keyof UserGetPublicProfileErrors];
export type UserGetPublicProfileResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetSinglePreferenceData = {
    body: {
        defaultValue?: boolean | string;
        key: string;
    };
    path?: never;
    query?: never;
    url: "/users/preferences/get";
};
export type UserGetSinglePreferenceErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetSinglePreferenceError = UserGetSinglePreferenceErrors[keyof UserGetSinglePreferenceErrors];
export type UserGetSinglePreferenceResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserGetUserForEditingProfileData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/profile/edit";
};
export type UserGetUserForEditingProfileErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserGetUserForEditingProfileError = UserGetUserForEditingProfileErrors[keyof UserGetUserForEditingProfileErrors];
export type UserGetUserForEditingProfileResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserMarkUserAsOnboardedData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/onboarding/mark";
};
export type UserMarkUserAsOnboardedErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserMarkUserAsOnboardedError = UserMarkUserAsOnboardedErrors[keyof UserMarkUserAsOnboardedErrors];
export type UserMarkUserAsOnboardedResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserResetUserOnboardingData = {
    body?: never;
    path?: never;
    query?: never;
    url: "/users/onboarding/reset";
};
export type UserResetUserOnboardingErrors = {
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserResetUserOnboardingError = UserResetUserOnboardingErrors[keyof UserResetUserOnboardingErrors];
export type UserResetUserOnboardingResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserUpdatePreferenceData = {
    body: {
        key: string;
        value: boolean | string | null;
    };
    path?: never;
    query?: never;
    url: "/users/preferences/update";
};
export type UserUpdatePreferenceErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserUpdatePreferenceError = UserUpdatePreferenceErrors[keyof UserUpdatePreferenceErrors];
export type UserUpdatePreferenceResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UserUpdateProfileData = {
    body: {
        avatarImage?: {
            id: string;
            key: string;
        } | null;
        avatarImageId?: string | null;
        bio?: string;
        coverImage?: {
            id: string;
            key: string;
        } | null;
        coverImageId?: string | null;
        name: string;
        timezone?: string;
        username?: string;
    };
    path?: never;
    query?: never;
    url: "/users/profile/update";
};
export type UserUpdateProfileErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UserUpdateProfileError = UserUpdateProfileErrors[keyof UserUpdateProfileErrors];
export type UserUpdateProfileResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
export type UtImageDeleteData = {
    body?: never;
    path?: never;
    query: {
        id: string;
    };
    url: "/ut-images/delete";
};
export type UtImageDeleteErrors = {
    /**
     * Invalid input data
     */
    400: ErrorBadRequest;
    /**
     * Authorization not provided
     */
    401: ErrorUnauthorized;
    /**
     * Insufficient access
     */
    403: ErrorForbidden;
    /**
     * Not found
     */
    404: ErrorNotFound;
    /**
     * Internal server error
     */
    500: ErrorInternalServerError;
};
export type UtImageDeleteError = UtImageDeleteErrors[keyof UtImageDeleteErrors];
export type UtImageDeleteResponses = {
    /**
     * Legacy endpoint response; a typed output schema is pending.
     */
    200: unknown;
};
