import type { Client, Options as Options2, TDataShape } from "./client";
import type { AuthChangePasswordData, AuthChangePasswordErrors, AuthChangePasswordResponses, ChangelogAddEntryData, ChangelogAddEntryErrors, ChangelogAddEntryResponses, ChangelogCreateChangeData, ChangelogCreateChangeErrors, ChangelogCreateChangeResponses, ChangelogCreateData, ChangelogCreateErrors, ChangelogCreateResponses, ChangelogDeleteChangeData, ChangelogDeleteChangeErrors, ChangelogDeleteChangeResponses, ChangelogDeleteData, ChangelogDeleteErrors, ChangelogDeleteResponses, ChangelogGenerateMarkdownData, ChangelogGenerateMarkdownErrors, ChangelogGenerateMarkdownResponses, ChangelogGetByIdData, ChangelogGetByIdErrors, ChangelogGetByIdResponses, ChangelogGetEntriesAndRequestsData, ChangelogGetEntriesAndRequestsErrors, ChangelogGetEntriesAndRequestsResponses, ChangelogGetUnassignedEntriesData, ChangelogGetUnassignedEntriesErrors, ChangelogGetUnassignedEntriesResponses, ChangelogListByProjectData, ChangelogListByProjectErrors, ChangelogListByProjectResponses, ChangelogPublishData, ChangelogPublishErrors, ChangelogPublishResponses, ChangelogRemoveEntryData, ChangelogRemoveEntryErrors, ChangelogRemoveEntryResponses, ChangelogReorderEntriesData, ChangelogReorderEntriesErrors, ChangelogReorderEntriesResponses, ChangelogUpdateChangeData, ChangelogUpdateChangeErrors, ChangelogUpdateChangeResponses, ChangelogUpdateData, ChangelogUpdateErrors, ChangelogUpdateResponses, ChangelogUpdateStatusData, ChangelogUpdateStatusErrors, ChangelogUpdateStatusResponses, DeploymentClearProjectDeploymentData, DeploymentClearProjectDeploymentErrors, DeploymentClearProjectDeploymentResponses, DeploymentConnectAccountData, DeploymentConnectAccountErrors, DeploymentConnectAccountResponses, DeploymentDisconnectAccountData, DeploymentDisconnectAccountErrors, DeploymentDisconnectAccountResponses, DeploymentGetProjectDeploymentData, DeploymentGetProjectDeploymentErrors, DeploymentGetProjectDeploymentResponses, DeploymentListConnectionsData, DeploymentListConnectionsErrors, DeploymentListConnectionsResponses, DeploymentListPlatformsData, DeploymentListPlatformsErrors, DeploymentListPlatformsResponses, DeploymentListRemoteProjectsData, DeploymentListRemoteProjectsErrors, DeploymentListRemoteProjectsResponses, DeploymentRefreshDeploymentUrlData, DeploymentRefreshDeploymentUrlErrors, DeploymentRefreshDeploymentUrlResponses, DeploymentSetProjectDeploymentData, DeploymentSetProjectDeploymentErrors, DeploymentSetProjectDeploymentResponses, DiscussionCreateCategoryData, DiscussionCreateCategoryErrors, DiscussionCreateCategoryResponses, DiscussionCreateDiscussionData, DiscussionCreateDiscussionErrors, DiscussionCreateDiscussionResponses, DiscussionDeleteCategoryData, DiscussionDeleteCategoryErrors, DiscussionDeleteCategoryResponses, DiscussionDeleteDiscussionData, DiscussionDeleteDiscussionErrors, DiscussionDeleteDiscussionResponses, DiscussionDeletePostData, DiscussionDeletePostErrors, DiscussionDeletePostResponses, DiscussionGetCategoriesByProjectSlugData, DiscussionGetCategoriesByProjectSlugErrors, DiscussionGetCategoriesByProjectSlugResponses, DiscussionGetCategoriesData, DiscussionGetCategoriesErrors, DiscussionGetCategoriesResponses, DiscussionGetDiscussionData, DiscussionGetDiscussionErrors, DiscussionGetDiscussionResponses, DiscussionGetDiscussionsData, DiscussionGetDiscussionsErrors, DiscussionGetDiscussionsResponses, DiscussionGetReactionsData, DiscussionGetReactionsErrors, DiscussionGetReactionsResponses, DiscussionIsWatchingDiscussionData, DiscussionIsWatchingDiscussionErrors, DiscussionIsWatchingDiscussionResponses, DiscussionMarkAsAnswerData, DiscussionMarkAsAnswerErrors, DiscussionMarkAsAnswerResponses, DiscussionPinDiscussionData, DiscussionPinDiscussionErrors, DiscussionPinDiscussionResponses, DiscussionReactData, DiscussionReactErrors, DiscussionReactResponses, DiscussionReplyToDiscussionData, DiscussionReplyToDiscussionErrors, DiscussionReplyToDiscussionResponses, DiscussionUnmarkAsAnswerData, DiscussionUnmarkAsAnswerErrors, DiscussionUnmarkAsAnswerResponses, DiscussionUpdateCategoryData, DiscussionUpdateCategoryErrors, DiscussionUpdateCategoryResponses, DiscussionUpdateDiscussionData, DiscussionUpdateDiscussionErrors, DiscussionUpdateDiscussionResponses, DiscussionUpdatePostData, DiscussionUpdatePostErrors, DiscussionUpdatePostResponses, DiscussionUpvoteData, DiscussionUpvoteErrors, DiscussionUpvoteResponses, DiscussionWatchDiscussionData, DiscussionWatchDiscussionErrors, DiscussionWatchDiscussionResponses, EntryCheckSlugAvailabilityData, EntryCheckSlugAvailabilityErrors, EntryCheckSlugAvailabilityResponses, EntryCreateData, EntryCreateErrors, EntryCreateResponses, EntryDeleteData, EntryDeleteErrors, EntryDeleteResponses, EntryGetByIdData, EntryGetByIdErrors, EntryGetByIdResponses, EntryGetEntriesByDateData, EntryGetEntriesByDateErrors, EntryGetEntriesByDateResponses, EntryGetLeaderboardData, EntryGetLeaderboardErrors, EntryGetLeaderboardResponses, EntryGetPublicTimelineData, EntryGetPublicTimelineErrors, EntryGetPublicTimelineResponses, EntryGetTimelineActivityData, EntryGetTimelineActivityErrors, EntryGetTimelineActivityResponses, EntryGetTrendingProjectsData, EntryGetTrendingProjectsErrors, EntryGetTrendingProjectsResponses, EntryListByProjectData, EntryListByProjectErrors, EntryListByProjectResponses, EntryListData, EntryListErrors, EntryListResponses, EntryReorderEntriesData, EntryReorderEntriesErrors, EntryReorderEntriesResponses, EntryUpdateData, EntryUpdateErrors, EntryUpdateResponses, EntryUpdateStatusData, EntryUpdateStatusErrors, EntryUpdateStatusResponses, FeatureGetPublicFeatureData, FeatureGetPublicFeatureErrors, FeatureGetPublicFeatureResponses, FeatureGetPublicFeaturesData, FeatureGetPublicFeaturesErrors, FeatureGetPublicFeaturesResponses, GithubClearProjectTokenData, GithubClearProjectTokenErrors, GithubClearProjectTokenResponses, GithubConnectRepoData, GithubConnectRepoErrors, GithubConnectRepoResponses, GithubDisconnectRepoData, GithubDisconnectRepoErrors, GithubDisconnectRepoResponses, GithubFindObjectData, GithubFindObjectErrors, GithubFindObjectResponses, GithubGetRepoData, GithubGetRepoErrors, GithubGetRepoResponses, GithubLinkObjectData, GithubLinkObjectErrors, GithubLinkObjectResponses, GithubListLinksData, GithubListLinksErrors, GithubListLinksResponses, GithubListRepoObjectsData, GithubListRepoObjectsErrors, GithubListRepoObjectsResponses, GithubRefreshLinkData, GithubRefreshLinkErrors, GithubRefreshLinkResponses, GithubSearchReposData, GithubSearchReposErrors, GithubSearchReposResponses, GithubSetProjectTokenData, GithubSetProjectTokenErrors, GithubSetProjectTokenResponses, GithubUnlinkObjectData, GithubUnlinkObjectErrors, GithubUnlinkObjectResponses, MemoryCreateData, MemoryCreateErrors, MemoryCreateResponses, MemoryDeleteMemoryData, MemoryDeleteMemoryErrors, MemoryDeleteMemoryResponses, MemoryGetData, MemoryGetErrors, MemoryGetInstructionsData, MemoryGetInstructionsErrors, MemoryGetInstructionsResponses, MemoryGetResponses, MemoryListData, MemoryListErrors, MemoryListResponses, MemorySearchData, MemorySearchErrors, MemorySearchResponses, MemorySetInstructionsData, MemorySetInstructionsErrors, MemorySetInstructionsResponses, MemoryUpdateData, MemoryUpdateErrors, MemoryUpdateResponses, MemoryVerifyData, MemoryVerifyErrors, MemoryVerifyResponses, PolarGetBillingStateData, PolarGetBillingStateErrors, PolarGetBillingStateResponses, ProjectBrandKitClearAssetData, ProjectBrandKitClearAssetErrors, ProjectBrandKitClearAssetResponses, ProjectBrandKitGetBrandKitData, ProjectBrandKitGetBrandKitErrors, ProjectBrandKitGetBrandKitResponses, ProjectBrandKitGetCatalogueData, ProjectBrandKitGetCatalogueErrors, ProjectBrandKitGetCatalogueResponses, ProjectBrandKitGetPublicBrandKitData, ProjectBrandKitGetPublicBrandKitErrors, ProjectBrandKitGetPublicBrandKitResponses, ProjectBrandKitSetAssetData, ProjectBrandKitSetAssetErrors, ProjectBrandKitSetAssetResponses, ProjectBrandKitSetFieldData, ProjectBrandKitSetFieldErrors, ProjectBrandKitSetFieldResponses, ProjectCompletionGetCatalogueData, ProjectCompletionGetCatalogueErrors, ProjectCompletionGetCatalogueResponses, ProjectCompletionGetProgressData, ProjectCompletionGetProgressErrors, ProjectCompletionGetProgressResponses, ProjectCompletionSetGroupData, ProjectCompletionSetGroupErrors, ProjectCompletionSetGroupResponses, ProjectCompletionSetItemData, ProjectCompletionSetItemErrors, ProjectCompletionSetItemResponses, ProjectCreateData, ProjectCreateErrors, ProjectCreateResponses, ProjectDeleteData, ProjectDeleteErrors, ProjectDeleteResponses, ProjectGalleryAddItemsData, ProjectGalleryAddItemsErrors, ProjectGalleryAddItemsResponses, ProjectGalleryGetPublicGalleryData, ProjectGalleryGetPublicGalleryErrors, ProjectGalleryGetPublicGalleryResponses, ProjectGalleryListData, ProjectGalleryListErrors, ProjectGalleryListResponses, ProjectGalleryRemoveItemData, ProjectGalleryRemoveItemErrors, ProjectGalleryRemoveItemResponses, ProjectGalleryReorderData, ProjectGalleryReorderErrors, ProjectGalleryReorderResponses, ProjectGalleryUpdateItemData, ProjectGalleryUpdateItemErrors, ProjectGalleryUpdateItemResponses, ProjectGetByIdData, ProjectGetByIdErrors, ProjectGetByIdResponses, ProjectGetChangelogsInVersionRangeData, ProjectGetChangelogsInVersionRangeErrors, ProjectGetChangelogsInVersionRangeResponses, ProjectGetGitHubYearlyActivityData, ProjectGetGitHubYearlyActivityErrors, ProjectGetGitHubYearlyActivityResponses, ProjectGetPublicChangelogByVersionData, ProjectGetPublicChangelogByVersionErrors, ProjectGetPublicChangelogByVersionResponses, ProjectGetPublicChangelogData, ProjectGetPublicChangelogErrors, ProjectGetPublicChangelogResponses, ProjectGetPublicChangelogsData, ProjectGetPublicChangelogsErrors, ProjectGetPublicChangelogsResponses, ProjectGetPublicEntriesData, ProjectGetPublicEntriesErrors, ProjectGetPublicEntriesResponses, ProjectGetPublicEntryData, ProjectGetPublicEntryErrors, ProjectGetPublicEntryResponses, ProjectGetPublicProjectData, ProjectGetPublicProjectErrors, ProjectGetPublicProjectResponses, ProjectListData, ProjectListErrors, ProjectListResponses, ProjectUpdateData, ProjectUpdateErrors, ProjectUpdateResponses, RequestApproveRequestData, RequestApproveRequestErrors, RequestApproveRequestResponses, RequestCreateCommentData, RequestCreateCommentErrors, RequestCreateCommentResponses, RequestCreatePublicRequestData, RequestCreatePublicRequestErrors, RequestCreatePublicRequestResponses, RequestDeleteRequestData, RequestDeleteRequestErrors, RequestDeleteRequestResponses, RequestGetPublicRequestCategoriesData, RequestGetPublicRequestCategoriesErrors, RequestGetPublicRequestCategoriesResponses, RequestGetPublicRequestData, RequestGetPublicRequestErrors, RequestGetPublicRequestResponses, RequestGetPublicRequestsData, RequestGetPublicRequestsErrors, RequestGetPublicRequestsResponses, RequestGetSizzyEmailData, RequestGetSizzyEmailErrors, RequestGetSizzyEmailResponses, RequestMergeRequestsData, RequestMergeRequestsErrors, RequestMergeRequestsResponses, RequestToggleCloseRequestData, RequestToggleCloseRequestErrors, RequestToggleCloseRequestResponses, RequestToggleLockRequestData, RequestToggleLockRequestErrors, RequestToggleLockRequestResponses, RoadmapCreateRoadmapEntryData, RoadmapCreateRoadmapEntryErrors, RoadmapCreateRoadmapEntryFromRequestData, RoadmapCreateRoadmapEntryFromRequestErrors, RoadmapCreateRoadmapEntryFromRequestResponses, RoadmapCreateRoadmapEntryResponses, RoadmapCreateRoadmapStatusData, RoadmapCreateRoadmapStatusErrors, RoadmapCreateRoadmapStatusResponses, RoadmapDeleteRoadmapEntryData, RoadmapDeleteRoadmapEntryErrors, RoadmapDeleteRoadmapEntryResponses, RoadmapDeleteRoadmapStatusData, RoadmapDeleteRoadmapStatusErrors, RoadmapDeleteRoadmapStatusResponses, RoadmapGetPublicRoadmapEntriesData, RoadmapGetPublicRoadmapEntriesErrors, RoadmapGetPublicRoadmapEntriesResponses, RoadmapGetPublicRoadmapStatusesData, RoadmapGetPublicRoadmapStatusesErrors, RoadmapGetPublicRoadmapStatusesResponses, RoadmapGetRoadmapEntriesData, RoadmapGetRoadmapEntriesErrors, RoadmapGetRoadmapEntriesResponses, RoadmapGetRoadmapStatusesData, RoadmapGetRoadmapStatusesErrors, RoadmapGetRoadmapStatusesResponses, RoadmapUpdateRoadmapEntryData, RoadmapUpdateRoadmapEntryErrors, RoadmapUpdateRoadmapEntryResponses, RoadmapUpdateRoadmapStatusData, RoadmapUpdateRoadmapStatusErrors, RoadmapUpdateRoadmapStatusResponses, S3ImageDeleteData, S3ImageDeleteErrors, S3ImageDeleteResponses, S3ImageGetByEntryIdData, S3ImageGetByEntryIdErrors, S3ImageGetByEntryIdResponses, S3ImageGetUploadUrlData, S3ImageGetUploadUrlErrors, S3ImageGetUploadUrlResponses, TaskAttachFilesData, TaskAttachFilesErrors, TaskAttachFilesResponses, TaskClaimNextData, TaskClaimNextErrors, TaskClaimNextResponses, TaskCreateCommentData, TaskCreateCommentErrors, TaskCreateCommentResponses, TaskCreateData, TaskCreateErrors, TaskCreateResponses, TaskDeleteTaskData, TaskDeleteTaskErrors, TaskDeleteTaskResponses, TaskGetData, TaskGetErrors, TaskGetPublicTaskData, TaskGetPublicTaskErrors, TaskGetPublicTaskResponses, TaskGetPublicTasksData, TaskGetPublicTasksErrors, TaskGetPublicTasksResponses, TaskGetResponses, TaskListData, TaskListErrors, TaskListOwnedData, TaskListOwnedErrors, TaskListOwnedResponses, TaskListResponses, TaskRemoveFileData, TaskRemoveFileErrors, TaskRemoveFileResponses, TaskUpdateData, TaskUpdateErrors, TaskUpdateResponses, TrashListData, TrashListErrors, TrashListResponses, TrashPurgeData, TrashPurgeErrors, TrashPurgeManyData, TrashPurgeManyErrors, TrashPurgeManyResponses, TrashPurgeResponses, TrashRestoreData, TrashRestoreErrors, TrashRestoreManyData, TrashRestoreManyErrors, TrashRestoreManyResponses, TrashRestoreResponses, TypefullyCreateDraftData, TypefullyCreateDraftErrors, TypefullyCreateDraftResponses, TypefullyGetConnectionStatusData, TypefullyGetConnectionStatusErrors, TypefullyGetConnectionStatusResponses, TypefullyGetMeData, TypefullyGetMeErrors, TypefullyGetMeResponses, TypefullyGetSocialSetsData, TypefullyGetSocialSetsErrors, TypefullyGetSocialSetsResponses, TypefullyRemoveApiKeyData, TypefullyRemoveApiKeyErrors, TypefullyRemoveApiKeyResponses, TypefullySetApiKeyData, TypefullySetApiKeyErrors, TypefullySetApiKeyResponses, TypefullyUploadMediaData, TypefullyUploadMediaErrors, TypefullyUploadMediaResponses, UserDisconnectAccountData, UserDisconnectAccountErrors, UserDisconnectAccountResponses, UserGetCurrentUserData, UserGetCurrentUserErrors, UserGetCurrentUserResponses, UserGetMyProfileData, UserGetMyProfileErrors, UserGetMyProfileResponses, UserGetPreferencesData, UserGetPreferencesErrors, UserGetPreferencesResponses, UserGetPublicProfileData, UserGetPublicProfileErrors, UserGetPublicProfileResponses, UserGetSinglePreferenceData, UserGetSinglePreferenceErrors, UserGetSinglePreferenceResponses, UserGetUserForEditingProfileData, UserGetUserForEditingProfileErrors, UserGetUserForEditingProfileResponses, UserMarkUserAsOnboardedData, UserMarkUserAsOnboardedErrors, UserMarkUserAsOnboardedResponses, UserResetUserOnboardingData, UserResetUserOnboardingErrors, UserResetUserOnboardingResponses, UserUpdatePreferenceData, UserUpdatePreferenceErrors, UserUpdatePreferenceResponses, UserUpdateProfileData, UserUpdateProfileErrors, UserUpdateProfileResponses, UtImageDeleteData, UtImageDeleteErrors, UtImageDeleteResponses } from "./types.gen";
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options2<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
export declare class Auth {
    /**
     * Change password
     */
    static authChangePassword<ThrowOnError extends boolean = false>(options: Options<AuthChangePasswordData, ThrowOnError>): import("./client").RequestResult<AuthChangePasswordResponses, AuthChangePasswordErrors, ThrowOnError, "fields">;
}
export declare class Changelogs {
    /**
     * Add entry to changelog
     */
    static changelogAddEntry<ThrowOnError extends boolean = false>(options: Options<ChangelogAddEntryData, ThrowOnError>): import("./client").RequestResult<ChangelogAddEntryResponses, ChangelogAddEntryErrors, ThrowOnError, "fields">;
    /**
     * Create changelog
     */
    static changelogCreate<ThrowOnError extends boolean = false>(options: Options<ChangelogCreateData, ThrowOnError>): import("./client").RequestResult<ChangelogCreateResponses, ChangelogCreateErrors, ThrowOnError, "fields">;
    /**
     * Create changelog change
     */
    static changelogCreateChange<ThrowOnError extends boolean = false>(options: Options<ChangelogCreateChangeData, ThrowOnError>): import("./client").RequestResult<ChangelogCreateChangeResponses, ChangelogCreateChangeErrors, ThrowOnError, "fields">;
    /**
     * Delete changelog
     */
    static changelogDelete<ThrowOnError extends boolean = false>(options: Options<ChangelogDeleteData, ThrowOnError>): import("./client").RequestResult<ChangelogDeleteResponses, ChangelogDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete changelog change
     */
    static changelogDeleteChange<ThrowOnError extends boolean = false>(options: Options<ChangelogDeleteChangeData, ThrowOnError>): import("./client").RequestResult<ChangelogDeleteChangeResponses, ChangelogDeleteChangeErrors, ThrowOnError, "fields">;
    /**
     * Generate changelog markdown
     */
    static changelogGenerateMarkdown<ThrowOnError extends boolean = false>(options: Options<ChangelogGenerateMarkdownData, ThrowOnError>): import("./client").RequestResult<ChangelogGenerateMarkdownResponses, ChangelogGenerateMarkdownErrors, ThrowOnError, "fields">;
    /**
     * Get changelog by ID
     */
    static changelogGetById<ThrowOnError extends boolean = false>(options: Options<ChangelogGetByIdData, ThrowOnError>): import("./client").RequestResult<ChangelogGetByIdResponses, ChangelogGetByIdErrors, ThrowOnError, "fields">;
    /**
     * Get changelog entries and requests
     */
    static changelogGetEntriesAndRequests<ThrowOnError extends boolean = false>(options: Options<ChangelogGetEntriesAndRequestsData, ThrowOnError>): import("./client").RequestResult<ChangelogGetEntriesAndRequestsResponses, ChangelogGetEntriesAndRequestsErrors, ThrowOnError, "fields">;
    /**
     * Get unassigned entries
     */
    static changelogGetUnassignedEntries<ThrowOnError extends boolean = false>(options: Options<ChangelogGetUnassignedEntriesData, ThrowOnError>): import("./client").RequestResult<ChangelogGetUnassignedEntriesResponses, ChangelogGetUnassignedEntriesErrors, ThrowOnError, "fields">;
    /**
     * List changelogs by project
     */
    static changelogListByProject<ThrowOnError extends boolean = false>(options: Options<ChangelogListByProjectData, ThrowOnError>): import("./client").RequestResult<ChangelogListByProjectResponses, ChangelogListByProjectErrors, ThrowOnError, "fields">;
    /**
     * Publish changelog
     */
    static changelogPublish<ThrowOnError extends boolean = false>(options: Options<ChangelogPublishData, ThrowOnError>): import("./client").RequestResult<ChangelogPublishResponses, ChangelogPublishErrors, ThrowOnError, "fields">;
    /**
     * Remove entry from changelog
     */
    static changelogRemoveEntry<ThrowOnError extends boolean = false>(options: Options<ChangelogRemoveEntryData, ThrowOnError>): import("./client").RequestResult<ChangelogRemoveEntryResponses, ChangelogRemoveEntryErrors, ThrowOnError, "fields">;
    /**
     * Reorder changelog entries
     */
    static changelogReorderEntries<ThrowOnError extends boolean = false>(options: Options<ChangelogReorderEntriesData, ThrowOnError>): import("./client").RequestResult<ChangelogReorderEntriesResponses, ChangelogReorderEntriesErrors, ThrowOnError, "fields">;
    /**
     * Update changelog
     */
    static changelogUpdate<ThrowOnError extends boolean = false>(options: Options<ChangelogUpdateData, ThrowOnError>): import("./client").RequestResult<ChangelogUpdateResponses, ChangelogUpdateErrors, ThrowOnError, "fields">;
    /**
     * Update changelog change
     */
    static changelogUpdateChange<ThrowOnError extends boolean = false>(options: Options<ChangelogUpdateChangeData, ThrowOnError>): import("./client").RequestResult<ChangelogUpdateChangeResponses, ChangelogUpdateChangeErrors, ThrowOnError, "fields">;
    /**
     * Update changelog status
     */
    static changelogUpdateStatus<ThrowOnError extends boolean = false>(options: Options<ChangelogUpdateStatusData, ThrowOnError>): import("./client").RequestResult<ChangelogUpdateStatusResponses, ChangelogUpdateStatusErrors, ThrowOnError, "fields">;
}
export declare class Deployment {
    /**
     * Clear project deployment
     */
    static deploymentClearProjectDeployment<ThrowOnError extends boolean = false>(options: Options<DeploymentClearProjectDeploymentData, ThrowOnError>): import("./client").RequestResult<DeploymentClearProjectDeploymentResponses, DeploymentClearProjectDeploymentErrors, ThrowOnError, "fields">;
    /**
     * Connect a deployment platform account
     */
    static deploymentConnectAccount<ThrowOnError extends boolean = false>(options: Options<DeploymentConnectAccountData, ThrowOnError>): import("./client").RequestResult<DeploymentConnectAccountResponses, DeploymentConnectAccountErrors, ThrowOnError, "fields">;
    /**
     * Disconnect a deployment platform account
     */
    static deploymentDisconnectAccount<ThrowOnError extends boolean = false>(options: Options<DeploymentDisconnectAccountData, ThrowOnError>): import("./client").RequestResult<DeploymentDisconnectAccountResponses, DeploymentDisconnectAccountErrors, ThrowOnError, "fields">;
    /**
     * Get project deployment
     */
    static deploymentGetProjectDeployment<ThrowOnError extends boolean = false>(options: Options<DeploymentGetProjectDeploymentData, ThrowOnError>): import("./client").RequestResult<DeploymentGetProjectDeploymentResponses, DeploymentGetProjectDeploymentErrors, ThrowOnError, "fields">;
    /**
     * List deployment platform connections
     */
    static deploymentListConnections<ThrowOnError extends boolean = false>(options?: Options<DeploymentListConnectionsData, ThrowOnError>): import("./client").RequestResult<DeploymentListConnectionsResponses, DeploymentListConnectionsErrors, ThrowOnError, "fields">;
    /**
     * List deployment platforms
     */
    static deploymentListPlatforms<ThrowOnError extends boolean = false>(options?: Options<DeploymentListPlatformsData, ThrowOnError>): import("./client").RequestResult<DeploymentListPlatformsResponses, DeploymentListPlatformsErrors, ThrowOnError, "fields">;
    /**
     * List remote deployment projects
     */
    static deploymentListRemoteProjects<ThrowOnError extends boolean = false>(options: Options<DeploymentListRemoteProjectsData, ThrowOnError>): import("./client").RequestResult<DeploymentListRemoteProjectsResponses, DeploymentListRemoteProjectsErrors, ThrowOnError, "fields">;
    /**
     * Refresh project deployment URL
     */
    static deploymentRefreshDeploymentUrl<ThrowOnError extends boolean = false>(options: Options<DeploymentRefreshDeploymentUrlData, ThrowOnError>): import("./client").RequestResult<DeploymentRefreshDeploymentUrlResponses, DeploymentRefreshDeploymentUrlErrors, ThrowOnError, "fields">;
    /**
     * Set project deployment
     */
    static deploymentSetProjectDeployment<ThrowOnError extends boolean = false>(options: Options<DeploymentSetProjectDeploymentData, ThrowOnError>): import("./client").RequestResult<DeploymentSetProjectDeploymentResponses, DeploymentSetProjectDeploymentErrors, ThrowOnError, "fields">;
}
export declare class Discussions {
    /**
     * Create discussion category
     */
    static discussionCreateCategory<ThrowOnError extends boolean = false>(options: Options<DiscussionCreateCategoryData, ThrowOnError>): import("./client").RequestResult<DiscussionCreateCategoryResponses, DiscussionCreateCategoryErrors, ThrowOnError, "fields">;
    /**
     * Create discussion
     */
    static discussionCreateDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionCreateDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionCreateDiscussionResponses, DiscussionCreateDiscussionErrors, ThrowOnError, "fields">;
    /**
     * Delete discussion category
     */
    static discussionDeleteCategory<ThrowOnError extends boolean = false>(options: Options<DiscussionDeleteCategoryData, ThrowOnError>): import("./client").RequestResult<DiscussionDeleteCategoryResponses, DiscussionDeleteCategoryErrors, ThrowOnError, "fields">;
    /**
     * Delete discussion
     */
    static discussionDeleteDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionDeleteDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionDeleteDiscussionResponses, DiscussionDeleteDiscussionErrors, ThrowOnError, "fields">;
    /**
     * Delete discussion post
     */
    static discussionDeletePost<ThrowOnError extends boolean = false>(options: Options<DiscussionDeletePostData, ThrowOnError>): import("./client").RequestResult<DiscussionDeletePostResponses, DiscussionDeletePostErrors, ThrowOnError, "fields">;
    /**
     * List discussion categories
     */
    static discussionGetCategories<ThrowOnError extends boolean = false>(options: Options<DiscussionGetCategoriesData, ThrowOnError>): import("./client").RequestResult<DiscussionGetCategoriesResponses, DiscussionGetCategoriesErrors, ThrowOnError, "fields">;
    /**
     * List discussion categories by project
     */
    static discussionGetCategoriesByProjectSlug<ThrowOnError extends boolean = false>(options: Options<DiscussionGetCategoriesByProjectSlugData, ThrowOnError>): import("./client").RequestResult<DiscussionGetCategoriesByProjectSlugResponses, DiscussionGetCategoriesByProjectSlugErrors, ThrowOnError, "fields">;
    /**
     * Get discussion
     */
    static discussionGetDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionGetDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionGetDiscussionResponses, DiscussionGetDiscussionErrors, ThrowOnError, "fields">;
    /**
     * List discussions
     */
    static discussionGetDiscussions<ThrowOnError extends boolean = false>(options: Options<DiscussionGetDiscussionsData, ThrowOnError>): import("./client").RequestResult<DiscussionGetDiscussionsResponses, DiscussionGetDiscussionsErrors, ThrowOnError, "fields">;
    /**
     * List discussion reactions
     */
    static discussionGetReactions<ThrowOnError extends boolean = false>(options: Options<DiscussionGetReactionsData, ThrowOnError>): import("./client").RequestResult<DiscussionGetReactionsResponses, DiscussionGetReactionsErrors, ThrowOnError, "fields">;
    /**
     * Check discussion watch status
     */
    static discussionIsWatchingDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionIsWatchingDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionIsWatchingDiscussionResponses, DiscussionIsWatchingDiscussionErrors, ThrowOnError, "fields">;
    /**
     * Mark post as answer
     */
    static discussionMarkAsAnswer<ThrowOnError extends boolean = false>(options: Options<DiscussionMarkAsAnswerData, ThrowOnError>): import("./client").RequestResult<DiscussionMarkAsAnswerResponses, DiscussionMarkAsAnswerErrors, ThrowOnError, "fields">;
    /**
     * Pin discussion
     */
    static discussionPinDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionPinDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionPinDiscussionResponses, DiscussionPinDiscussionErrors, ThrowOnError, "fields">;
    /**
     * React to discussion
     */
    static discussionReact<ThrowOnError extends boolean = false>(options: Options<DiscussionReactData, ThrowOnError>): import("./client").RequestResult<DiscussionReactResponses, DiscussionReactErrors, ThrowOnError, "fields">;
    /**
     * Reply to discussion
     */
    static discussionReplyToDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionReplyToDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionReplyToDiscussionResponses, DiscussionReplyToDiscussionErrors, ThrowOnError, "fields">;
    /**
     * Unmark post as answer
     */
    static discussionUnmarkAsAnswer<ThrowOnError extends boolean = false>(options: Options<DiscussionUnmarkAsAnswerData, ThrowOnError>): import("./client").RequestResult<DiscussionUnmarkAsAnswerResponses, DiscussionUnmarkAsAnswerErrors, ThrowOnError, "fields">;
    /**
     * Update discussion category
     */
    static discussionUpdateCategory<ThrowOnError extends boolean = false>(options: Options<DiscussionUpdateCategoryData, ThrowOnError>): import("./client").RequestResult<DiscussionUpdateCategoryResponses, DiscussionUpdateCategoryErrors, ThrowOnError, "fields">;
    /**
     * Update discussion
     */
    static discussionUpdateDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionUpdateDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionUpdateDiscussionResponses, DiscussionUpdateDiscussionErrors, ThrowOnError, "fields">;
    /**
     * Update discussion post
     */
    static discussionUpdatePost<ThrowOnError extends boolean = false>(options: Options<DiscussionUpdatePostData, ThrowOnError>): import("./client").RequestResult<DiscussionUpdatePostResponses, DiscussionUpdatePostErrors, ThrowOnError, "fields">;
    /**
     * Upvote discussion
     */
    static discussionUpvote<ThrowOnError extends boolean = false>(options: Options<DiscussionUpvoteData, ThrowOnError>): import("./client").RequestResult<DiscussionUpvoteResponses, DiscussionUpvoteErrors, ThrowOnError, "fields">;
    /**
     * Watch discussion
     */
    static discussionWatchDiscussion<ThrowOnError extends boolean = false>(options: Options<DiscussionWatchDiscussionData, ThrowOnError>): import("./client").RequestResult<DiscussionWatchDiscussionResponses, DiscussionWatchDiscussionErrors, ThrowOnError, "fields">;
}
export declare class Entries {
    /**
     * Check entry slug availability
     */
    static entryCheckSlugAvailability<ThrowOnError extends boolean = false>(options: Options<EntryCheckSlugAvailabilityData, ThrowOnError>): import("./client").RequestResult<EntryCheckSlugAvailabilityResponses, EntryCheckSlugAvailabilityErrors, ThrowOnError, "fields">;
    /**
     * Create entry
     */
    static entryCreate<ThrowOnError extends boolean = false>(options: Options<EntryCreateData, ThrowOnError>): import("./client").RequestResult<EntryCreateResponses, EntryCreateErrors, ThrowOnError, "fields">;
    /**
     * Delete entry
     */
    static entryDelete<ThrowOnError extends boolean = false>(options: Options<EntryDeleteData, ThrowOnError>): import("./client").RequestResult<EntryDeleteResponses, EntryDeleteErrors, ThrowOnError, "fields">;
    /**
     * Get entry by ID
     */
    static entryGetById<ThrowOnError extends boolean = false>(options: Options<EntryGetByIdData, ThrowOnError>): import("./client").RequestResult<EntryGetByIdResponses, EntryGetByIdErrors, ThrowOnError, "fields">;
    /**
     * Get entries by date
     */
    static entryGetEntriesByDate<ThrowOnError extends boolean = false>(options: Options<EntryGetEntriesByDateData, ThrowOnError>): import("./client").RequestResult<EntryGetEntriesByDateResponses, EntryGetEntriesByDateErrors, ThrowOnError, "fields">;
    /**
     * Get leaderboard
     */
    static entryGetLeaderboard<ThrowOnError extends boolean = false>(options: Options<EntryGetLeaderboardData, ThrowOnError>): import("./client").RequestResult<EntryGetLeaderboardResponses, EntryGetLeaderboardErrors, ThrowOnError, "fields">;
    /**
     * Get public timeline
     */
    static entryGetPublicTimeline<ThrowOnError extends boolean = false>(options: Options<EntryGetPublicTimelineData, ThrowOnError>): import("./client").RequestResult<EntryGetPublicTimelineResponses, EntryGetPublicTimelineErrors, ThrowOnError, "fields">;
    /**
     * Get timeline activity
     */
    static entryGetTimelineActivity<ThrowOnError extends boolean = false>(options?: Options<EntryGetTimelineActivityData, ThrowOnError>): import("./client").RequestResult<EntryGetTimelineActivityResponses, EntryGetTimelineActivityErrors, ThrowOnError, "fields">;
    /**
     * Get trending projects
     */
    static entryGetTrendingProjects<ThrowOnError extends boolean = false>(options: Options<EntryGetTrendingProjectsData, ThrowOnError>): import("./client").RequestResult<EntryGetTrendingProjectsResponses, EntryGetTrendingProjectsErrors, ThrowOnError, "fields">;
    /**
     * List entries
     */
    static entryList<ThrowOnError extends boolean = false>(options: Options<EntryListData, ThrowOnError>): import("./client").RequestResult<EntryListResponses, EntryListErrors, ThrowOnError, "fields">;
    /**
     * List entries by project
     */
    static entryListByProject<ThrowOnError extends boolean = false>(options: Options<EntryListByProjectData, ThrowOnError>): import("./client").RequestResult<EntryListByProjectResponses, EntryListByProjectErrors, ThrowOnError, "fields">;
    /**
     * Reorder entries
     */
    static entryReorderEntries<ThrowOnError extends boolean = false>(options: Options<EntryReorderEntriesData, ThrowOnError>): import("./client").RequestResult<EntryReorderEntriesResponses, EntryReorderEntriesErrors, ThrowOnError, "fields">;
    /**
     * Update entry
     */
    static entryUpdate<ThrowOnError extends boolean = false>(options: Options<EntryUpdateData, ThrowOnError>): import("./client").RequestResult<EntryUpdateResponses, EntryUpdateErrors, ThrowOnError, "fields">;
    /**
     * Update entry status
     */
    static entryUpdateStatus<ThrowOnError extends boolean = false>(options: Options<EntryUpdateStatusData, ThrowOnError>): import("./client").RequestResult<EntryUpdateStatusResponses, EntryUpdateStatusErrors, ThrowOnError, "fields">;
}
export declare class Features {
    /**
     * Get public feature
     */
    static featureGetPublicFeature<ThrowOnError extends boolean = false>(options: Options<FeatureGetPublicFeatureData, ThrowOnError>): import("./client").RequestResult<FeatureGetPublicFeatureResponses, FeatureGetPublicFeatureErrors, ThrowOnError, "fields">;
    /**
     * List public features
     */
    static featureGetPublicFeatures<ThrowOnError extends boolean = false>(options: Options<FeatureGetPublicFeaturesData, ThrowOnError>): import("./client").RequestResult<FeatureGetPublicFeaturesResponses, FeatureGetPublicFeaturesErrors, ThrowOnError, "fields">;
}
export declare class GitHub {
    /**
     * Clear project GitHub token
     */
    static githubClearProjectToken<ThrowOnError extends boolean = false>(options: Options<GithubClearProjectTokenData, ThrowOnError>): import("./client").RequestResult<GithubClearProjectTokenResponses, GithubClearProjectTokenErrors, ThrowOnError, "fields">;
    /**
     * Connect a GitHub repository to a project
     */
    static githubConnectRepo<ThrowOnError extends boolean = false>(options: Options<GithubConnectRepoData, ThrowOnError>): import("./client").RequestResult<GithubConnectRepoResponses, GithubConnectRepoErrors, ThrowOnError, "fields">;
    /**
     * Disconnect a project's GitHub repository
     */
    static githubDisconnectRepo<ThrowOnError extends boolean = false>(options: Options<GithubDisconnectRepoData, ThrowOnError>): import("./client").RequestResult<GithubDisconnectRepoResponses, GithubDisconnectRepoErrors, ThrowOnError, "fields">;
    /**
     * Find one GitHub pull request, issue or commit
     */
    static githubFindObject<ThrowOnError extends boolean = false>(options: Options<GithubFindObjectData, ThrowOnError>): import("./client").RequestResult<GithubFindObjectResponses, GithubFindObjectErrors, ThrowOnError, "fields">;
    /**
     * Get a project's connected GitHub repository
     */
    static githubGetRepo<ThrowOnError extends boolean = false>(options: Options<GithubGetRepoData, ThrowOnError>): import("./client").RequestResult<GithubGetRepoResponses, GithubGetRepoErrors, ThrowOnError, "fields">;
    /**
     * Link a GitHub object to a task or changelog entry
     */
    static githubLinkObject<ThrowOnError extends boolean = false>(options: Options<GithubLinkObjectData, ThrowOnError>): import("./client").RequestResult<GithubLinkObjectResponses, GithubLinkObjectErrors, ThrowOnError, "fields">;
    /**
     * List GitHub links
     */
    static githubListLinks<ThrowOnError extends boolean = false>(options: Options<GithubListLinksData, ThrowOnError>): import("./client").RequestResult<GithubListLinksResponses, GithubListLinksErrors, ThrowOnError, "fields">;
    /**
     * List pull requests, issues or commits
     */
    static githubListRepoObjects<ThrowOnError extends boolean = false>(options: Options<GithubListRepoObjectsData, ThrowOnError>): import("./client").RequestResult<GithubListRepoObjectsResponses, GithubListRepoObjectsErrors, ThrowOnError, "fields">;
    /**
     * Refresh a GitHub link snapshot
     */
    static githubRefreshLink<ThrowOnError extends boolean = false>(options: Options<GithubRefreshLinkData, ThrowOnError>): import("./client").RequestResult<GithubRefreshLinkResponses, GithubRefreshLinkErrors, ThrowOnError, "fields">;
    /**
     * Search connectable GitHub repositories
     */
    static githubSearchRepos<ThrowOnError extends boolean = false>(options: Options<GithubSearchReposData, ThrowOnError>): import("./client").RequestResult<GithubSearchReposResponses, GithubSearchReposErrors, ThrowOnError, "fields">;
    /**
     * Set a project-specific GitHub token
     */
    static githubSetProjectToken<ThrowOnError extends boolean = false>(options: Options<GithubSetProjectTokenData, ThrowOnError>): import("./client").RequestResult<GithubSetProjectTokenResponses, GithubSetProjectTokenErrors, ThrowOnError, "fields">;
    /**
     * Unlink a GitHub object
     */
    static githubUnlinkObject<ThrowOnError extends boolean = false>(options: Options<GithubUnlinkObjectData, ThrowOnError>): import("./client").RequestResult<GithubUnlinkObjectResponses, GithubUnlinkObjectErrors, ThrowOnError, "fields">;
}
export declare class Memories {
    /**
     * Create memory
     */
    static memoryCreate<ThrowOnError extends boolean = false>(options: Options<MemoryCreateData, ThrowOnError>): import("./client").RequestResult<MemoryCreateResponses, MemoryCreateErrors, ThrowOnError, "fields">;
    /**
     * Delete memory
     */
    static memoryDeleteMemory<ThrowOnError extends boolean = false>(options: Options<MemoryDeleteMemoryData, ThrowOnError>): import("./client").RequestResult<MemoryDeleteMemoryResponses, MemoryDeleteMemoryErrors, ThrowOnError, "fields">;
    /**
     * Get memory
     */
    static memoryGet<ThrowOnError extends boolean = false>(options: Options<MemoryGetData, ThrowOnError>): import("./client").RequestResult<MemoryGetResponses, MemoryGetErrors, ThrowOnError, "fields">;
    /**
     * List memories
     */
    static memoryList<ThrowOnError extends boolean = false>(options: Options<MemoryListData, ThrowOnError>): import("./client").RequestResult<MemoryListResponses, MemoryListErrors, ThrowOnError, "fields">;
    /**
     * Search memories
     */
    static memorySearch<ThrowOnError extends boolean = false>(options: Options<MemorySearchData, ThrowOnError>): import("./client").RequestResult<MemorySearchResponses, MemorySearchErrors, ThrowOnError, "fields">;
    /**
     * Update memory
     */
    static memoryUpdate<ThrowOnError extends boolean = false>(options: Options<MemoryUpdateData, ThrowOnError>): import("./client").RequestResult<MemoryUpdateResponses, MemoryUpdateErrors, ThrowOnError, "fields">;
    /**
     * Verify memory
     */
    static memoryVerify<ThrowOnError extends boolean = false>(options: Options<MemoryVerifyData, ThrowOnError>): import("./client").RequestResult<MemoryVerifyResponses, MemoryVerifyErrors, ThrowOnError, "fields">;
}
export declare class Agents {
    /**
     * Get project agent instructions
     */
    static memoryGetInstructions<ThrowOnError extends boolean = false>(options: Options<MemoryGetInstructionsData, ThrowOnError>): import("./client").RequestResult<MemoryGetInstructionsResponses, MemoryGetInstructionsErrors, ThrowOnError, "fields">;
    /**
     * Set project agent instructions
     */
    static memorySetInstructions<ThrowOnError extends boolean = false>(options: Options<MemorySetInstructionsData, ThrowOnError>): import("./client").RequestResult<MemorySetInstructionsResponses, MemorySetInstructionsErrors, ThrowOnError, "fields">;
}
export declare class Polar {
    /**
     * Get billing state
     */
    static polarGetBillingState<ThrowOnError extends boolean = false>(options?: Options<PolarGetBillingStateData, ThrowOnError>): import("./client").RequestResult<PolarGetBillingStateResponses, PolarGetBillingStateErrors, ThrowOnError, "fields">;
}
export declare class Projects {
    /**
     * Create project
     */
    static projectCreate<ThrowOnError extends boolean = false>(options: Options<ProjectCreateData, ThrowOnError>): import("./client").RequestResult<ProjectCreateResponses, ProjectCreateErrors, ThrowOnError, "fields">;
    /**
     * Delete project
     */
    static projectDelete<ThrowOnError extends boolean = false>(options: Options<ProjectDeleteData, ThrowOnError>): import("./client").RequestResult<ProjectDeleteResponses, ProjectDeleteErrors, ThrowOnError, "fields">;
    /**
     * Get project by ID
     */
    static projectGetById<ThrowOnError extends boolean = false>(options: Options<ProjectGetByIdData, ThrowOnError>): import("./client").RequestResult<ProjectGetByIdResponses, ProjectGetByIdErrors, ThrowOnError, "fields">;
    /**
     * Get changelogs in version range
     */
    static projectGetChangelogsInVersionRange<ThrowOnError extends boolean = false>(options: Options<ProjectGetChangelogsInVersionRangeData, ThrowOnError>): import("./client").RequestResult<ProjectGetChangelogsInVersionRangeResponses, ProjectGetChangelogsInVersionRangeErrors, ThrowOnError, "fields">;
    /**
     * Get GitHub yearly activity
     */
    static projectGetGitHubYearlyActivity<ThrowOnError extends boolean = false>(options: Options<ProjectGetGitHubYearlyActivityData, ThrowOnError>): import("./client").RequestResult<ProjectGetGitHubYearlyActivityResponses, ProjectGetGitHubYearlyActivityErrors, ThrowOnError, "fields">;
    /**
     * Get public changelog
     */
    static projectGetPublicChangelog<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicChangelogData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicChangelogResponses, ProjectGetPublicChangelogErrors, ThrowOnError, "fields">;
    /**
     * Get public changelog by version
     */
    static projectGetPublicChangelogByVersion<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicChangelogByVersionData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicChangelogByVersionResponses, ProjectGetPublicChangelogByVersionErrors, ThrowOnError, "fields">;
    /**
     * List public changelogs
     */
    static projectGetPublicChangelogs<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicChangelogsData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicChangelogsResponses, ProjectGetPublicChangelogsErrors, ThrowOnError, "fields">;
    /**
     * List public entries
     */
    static projectGetPublicEntries<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicEntriesData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicEntriesResponses, ProjectGetPublicEntriesErrors, ThrowOnError, "fields">;
    /**
     * Get public entry
     */
    static projectGetPublicEntry<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicEntryData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicEntryResponses, ProjectGetPublicEntryErrors, ThrowOnError, "fields">;
    /**
     * Get public project
     */
    static projectGetPublicProject<ThrowOnError extends boolean = false>(options: Options<ProjectGetPublicProjectData, ThrowOnError>): import("./client").RequestResult<ProjectGetPublicProjectResponses, ProjectGetPublicProjectErrors, ThrowOnError, "fields">;
    /**
     * List projects
     */
    static projectList<ThrowOnError extends boolean = false>(options?: Options<ProjectListData, ThrowOnError>): import("./client").RequestResult<ProjectListResponses, ProjectListErrors, ThrowOnError, "fields">;
    /**
     * Update project
     */
    static projectUpdate<ThrowOnError extends boolean = false>(options: Options<ProjectUpdateData, ThrowOnError>): import("./client").RequestResult<ProjectUpdateResponses, ProjectUpdateErrors, ThrowOnError, "fields">;
}
export declare class ProjectBrandKit {
    /**
     * Clear a brand kit image slot
     */
    static projectBrandKitClearAsset<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitClearAssetData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitClearAssetResponses, ProjectBrandKitClearAssetErrors, ThrowOnError, "fields">;
    /**
     * Get project brand kit
     */
    static projectBrandKitGetBrandKit<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitGetBrandKitData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitGetBrandKitResponses, ProjectBrandKitGetBrandKitErrors, ThrowOnError, "fields">;
    /**
     * Get project brand kit catalogue
     */
    static projectBrandKitGetCatalogue<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitGetCatalogueData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitGetCatalogueResponses, ProjectBrandKitGetCatalogueErrors, ThrowOnError, "fields">;
    /**
     * Get public project brand kit
     */
    static projectBrandKitGetPublicBrandKit<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitGetPublicBrandKitData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitGetPublicBrandKitResponses, ProjectBrandKitGetPublicBrandKitErrors, ThrowOnError, "fields">;
    /**
     * Set a brand kit image slot
     */
    static projectBrandKitSetAsset<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitSetAssetData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitSetAssetResponses, ProjectBrandKitSetAssetErrors, ThrowOnError, "fields">;
    /**
     * Set a brand kit field
     */
    static projectBrandKitSetField<ThrowOnError extends boolean = false>(options: Options<ProjectBrandKitSetFieldData, ThrowOnError>): import("./client").RequestResult<ProjectBrandKitSetFieldResponses, ProjectBrandKitSetFieldErrors, ThrowOnError, "fields">;
}
export declare class ProjectCompletion {
    /**
     * Get project completion catalogue
     */
    static projectCompletionGetCatalogue<ThrowOnError extends boolean = false>(options: Options<ProjectCompletionGetCatalogueData, ThrowOnError>): import("./client").RequestResult<ProjectCompletionGetCatalogueResponses, ProjectCompletionGetCatalogueErrors, ThrowOnError, "fields">;
    /**
     * Get project completion progress
     */
    static projectCompletionGetProgress<ThrowOnError extends boolean = false>(options: Options<ProjectCompletionGetProgressData, ThrowOnError>): import("./client").RequestResult<ProjectCompletionGetProgressResponses, ProjectCompletionGetProgressErrors, ThrowOnError, "fields">;
    /**
     * Set completion status for a group
     */
    static projectCompletionSetGroup<ThrowOnError extends boolean = false>(options: Options<ProjectCompletionSetGroupData, ThrowOnError>): import("./client").RequestResult<ProjectCompletionSetGroupResponses, ProjectCompletionSetGroupErrors, ThrowOnError, "fields">;
    /**
     * Set completion status for an item
     */
    static projectCompletionSetItem<ThrowOnError extends boolean = false>(options: Options<ProjectCompletionSetItemData, ThrowOnError>): import("./client").RequestResult<ProjectCompletionSetItemResponses, ProjectCompletionSetItemErrors, ThrowOnError, "fields">;
}
export declare class ProjectGallery {
    /**
     * Add gallery items
     */
    static projectGalleryAddItems<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryAddItemsData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryAddItemsResponses, ProjectGalleryAddItemsErrors, ThrowOnError, "fields">;
    /**
     * Get public project gallery
     */
    static projectGalleryGetPublicGallery<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryGetPublicGalleryData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryGetPublicGalleryResponses, ProjectGalleryGetPublicGalleryErrors, ThrowOnError, "fields">;
    /**
     * List gallery items
     */
    static projectGalleryList<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryListData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryListResponses, ProjectGalleryListErrors, ThrowOnError, "fields">;
    /**
     * Remove gallery item
     */
    static projectGalleryRemoveItem<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryRemoveItemData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryRemoveItemResponses, ProjectGalleryRemoveItemErrors, ThrowOnError, "fields">;
    /**
     * Reorder gallery
     */
    static projectGalleryReorder<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryReorderData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryReorderResponses, ProjectGalleryReorderErrors, ThrowOnError, "fields">;
    /**
     * Update gallery item
     */
    static projectGalleryUpdateItem<ThrowOnError extends boolean = false>(options: Options<ProjectGalleryUpdateItemData, ThrowOnError>): import("./client").RequestResult<ProjectGalleryUpdateItemResponses, ProjectGalleryUpdateItemErrors, ThrowOnError, "fields">;
}
export declare class Requests {
    /**
     * Approve request
     */
    static requestApproveRequest<ThrowOnError extends boolean = false>(options: Options<RequestApproveRequestData, ThrowOnError>): import("./client").RequestResult<RequestApproveRequestResponses, RequestApproveRequestErrors, ThrowOnError, "fields">;
    /**
     * Create request comment
     */
    static requestCreateComment<ThrowOnError extends boolean = false>(options: Options<RequestCreateCommentData, ThrowOnError>): import("./client").RequestResult<RequestCreateCommentResponses, RequestCreateCommentErrors, ThrowOnError, "fields">;
    /**
     * Create a public request
     */
    static requestCreatePublicRequest<ThrowOnError extends boolean = false>(options: Options<RequestCreatePublicRequestData, ThrowOnError>): import("./client").RequestResult<RequestCreatePublicRequestResponses, RequestCreatePublicRequestErrors, ThrowOnError, "fields">;
    /**
     * Delete request
     */
    static requestDeleteRequest<ThrowOnError extends boolean = false>(options: Options<RequestDeleteRequestData, ThrowOnError>): import("./client").RequestResult<RequestDeleteRequestResponses, RequestDeleteRequestErrors, ThrowOnError, "fields">;
    /**
     * Get public request by ID
     */
    static requestGetPublicRequest<ThrowOnError extends boolean = false>(options: Options<RequestGetPublicRequestData, ThrowOnError>): import("./client").RequestResult<RequestGetPublicRequestResponses, RequestGetPublicRequestErrors, ThrowOnError, "fields">;
    /**
     * List public request categories
     */
    static requestGetPublicRequestCategories<ThrowOnError extends boolean = false>(options: Options<RequestGetPublicRequestCategoriesData, ThrowOnError>): import("./client").RequestResult<RequestGetPublicRequestCategoriesResponses, RequestGetPublicRequestCategoriesErrors, ThrowOnError, "fields">;
    /**
     * List public requests
     */
    static requestGetPublicRequests<ThrowOnError extends boolean = false>(options: Options<RequestGetPublicRequestsData, ThrowOnError>): import("./client").RequestResult<RequestGetPublicRequestsResponses, RequestGetPublicRequestsErrors, ThrowOnError, "fields">;
    /**
     * Deprecated Sizzy reporter lookup
     */
    static requestGetSizzyEmail<ThrowOnError extends boolean = false>(options: Options<RequestGetSizzyEmailData, ThrowOnError>): import("./client").RequestResult<RequestGetSizzyEmailResponses, RequestGetSizzyEmailErrors, ThrowOnError, "fields">;
    /**
     * Merge duplicate requests
     */
    static requestMergeRequests<ThrowOnError extends boolean = false>(options: Options<RequestMergeRequestsData, ThrowOnError>): import("./client").RequestResult<RequestMergeRequestsResponses, RequestMergeRequestsErrors, ThrowOnError, "fields">;
    /**
     * Toggle request closed
     */
    static requestToggleCloseRequest<ThrowOnError extends boolean = false>(options: Options<RequestToggleCloseRequestData, ThrowOnError>): import("./client").RequestResult<RequestToggleCloseRequestResponses, RequestToggleCloseRequestErrors, ThrowOnError, "fields">;
    /**
     * Toggle request locked
     */
    static requestToggleLockRequest<ThrowOnError extends boolean = false>(options: Options<RequestToggleLockRequestData, ThrowOnError>): import("./client").RequestResult<RequestToggleLockRequestResponses, RequestToggleLockRequestErrors, ThrowOnError, "fields">;
}
export declare class Roadmap {
    /**
     * Create roadmap entry
     */
    static roadmapCreateRoadmapEntry<ThrowOnError extends boolean = false>(options: Options<RoadmapCreateRoadmapEntryData, ThrowOnError>): import("./client").RequestResult<RoadmapCreateRoadmapEntryResponses, RoadmapCreateRoadmapEntryErrors, ThrowOnError, "fields">;
    /**
     * Create roadmap entry from request
     */
    static roadmapCreateRoadmapEntryFromRequest<ThrowOnError extends boolean = false>(options: Options<RoadmapCreateRoadmapEntryFromRequestData, ThrowOnError>): import("./client").RequestResult<RoadmapCreateRoadmapEntryFromRequestResponses, RoadmapCreateRoadmapEntryFromRequestErrors, ThrowOnError, "fields">;
    /**
     * Create roadmap status
     */
    static roadmapCreateRoadmapStatus<ThrowOnError extends boolean = false>(options: Options<RoadmapCreateRoadmapStatusData, ThrowOnError>): import("./client").RequestResult<RoadmapCreateRoadmapStatusResponses, RoadmapCreateRoadmapStatusErrors, ThrowOnError, "fields">;
    /**
     * Delete roadmap entry
     */
    static roadmapDeleteRoadmapEntry<ThrowOnError extends boolean = false>(options: Options<RoadmapDeleteRoadmapEntryData, ThrowOnError>): import("./client").RequestResult<RoadmapDeleteRoadmapEntryResponses, RoadmapDeleteRoadmapEntryErrors, ThrowOnError, "fields">;
    /**
     * Delete roadmap status
     */
    static roadmapDeleteRoadmapStatus<ThrowOnError extends boolean = false>(options: Options<RoadmapDeleteRoadmapStatusData, ThrowOnError>): import("./client").RequestResult<RoadmapDeleteRoadmapStatusResponses, RoadmapDeleteRoadmapStatusErrors, ThrowOnError, "fields">;
    /**
     * List public roadmap entries
     */
    static roadmapGetPublicRoadmapEntries<ThrowOnError extends boolean = false>(options: Options<RoadmapGetPublicRoadmapEntriesData, ThrowOnError>): import("./client").RequestResult<RoadmapGetPublicRoadmapEntriesResponses, RoadmapGetPublicRoadmapEntriesErrors, ThrowOnError, "fields">;
    /**
     * List public roadmap statuses
     */
    static roadmapGetPublicRoadmapStatuses<ThrowOnError extends boolean = false>(options: Options<RoadmapGetPublicRoadmapStatusesData, ThrowOnError>): import("./client").RequestResult<RoadmapGetPublicRoadmapStatusesResponses, RoadmapGetPublicRoadmapStatusesErrors, ThrowOnError, "fields">;
    /**
     * List roadmap entries
     */
    static roadmapGetRoadmapEntries<ThrowOnError extends boolean = false>(options: Options<RoadmapGetRoadmapEntriesData, ThrowOnError>): import("./client").RequestResult<RoadmapGetRoadmapEntriesResponses, RoadmapGetRoadmapEntriesErrors, ThrowOnError, "fields">;
    /**
     * List roadmap statuses
     */
    static roadmapGetRoadmapStatuses<ThrowOnError extends boolean = false>(options: Options<RoadmapGetRoadmapStatusesData, ThrowOnError>): import("./client").RequestResult<RoadmapGetRoadmapStatusesResponses, RoadmapGetRoadmapStatusesErrors, ThrowOnError, "fields">;
    /**
     * Update roadmap entry
     */
    static roadmapUpdateRoadmapEntry<ThrowOnError extends boolean = false>(options: Options<RoadmapUpdateRoadmapEntryData, ThrowOnError>): import("./client").RequestResult<RoadmapUpdateRoadmapEntryResponses, RoadmapUpdateRoadmapEntryErrors, ThrowOnError, "fields">;
    /**
     * Update roadmap status
     */
    static roadmapUpdateRoadmapStatus<ThrowOnError extends boolean = false>(options: Options<RoadmapUpdateRoadmapStatusData, ThrowOnError>): import("./client").RequestResult<RoadmapUpdateRoadmapStatusResponses, RoadmapUpdateRoadmapStatusErrors, ThrowOnError, "fields">;
}
export declare class S3Images {
    /**
     * Delete image
     */
    static s3ImageDelete<ThrowOnError extends boolean = false>(options: Options<S3ImageDeleteData, ThrowOnError>): import("./client").RequestResult<S3ImageDeleteResponses, S3ImageDeleteErrors, ThrowOnError, "fields">;
    /**
     * List images by entry
     */
    static s3ImageGetByEntryId<ThrowOnError extends boolean = false>(options: Options<S3ImageGetByEntryIdData, ThrowOnError>): import("./client").RequestResult<S3ImageGetByEntryIdResponses, S3ImageGetByEntryIdErrors, ThrowOnError, "fields">;
    /**
     * Get upload URL
     */
    static s3ImageGetUploadUrl<ThrowOnError extends boolean = false>(options: Options<S3ImageGetUploadUrlData, ThrowOnError>): import("./client").RequestResult<S3ImageGetUploadUrlResponses, S3ImageGetUploadUrlErrors, ThrowOnError, "fields">;
}
export declare class Tasks {
    /**
     * Attach files to task
     */
    static taskAttachFiles<ThrowOnError extends boolean = false>(options: Options<TaskAttachFilesData, ThrowOnError>): import("./client").RequestResult<TaskAttachFilesResponses, TaskAttachFilesErrors, ThrowOnError, "fields">;
    /**
     * Claim next available task
     */
    static taskClaimNext<ThrowOnError extends boolean = false>(options: Options<TaskClaimNextData, ThrowOnError>): import("./client").RequestResult<TaskClaimNextResponses, TaskClaimNextErrors, ThrowOnError, "fields">;
    /**
     * Create task
     */
    static taskCreate<ThrowOnError extends boolean = false>(options: Options<TaskCreateData, ThrowOnError>): import("./client").RequestResult<TaskCreateResponses, TaskCreateErrors, ThrowOnError, "fields">;
    /**
     * Create task comment
     */
    static taskCreateComment<ThrowOnError extends boolean = false>(options: Options<TaskCreateCommentData, ThrowOnError>): import("./client").RequestResult<TaskCreateCommentResponses, TaskCreateCommentErrors, ThrowOnError, "fields">;
    /**
     * Delete task
     */
    static taskDeleteTask<ThrowOnError extends boolean = false>(options: Options<TaskDeleteTaskData, ThrowOnError>): import("./client").RequestResult<TaskDeleteTaskResponses, TaskDeleteTaskErrors, ThrowOnError, "fields">;
    /**
     * Get task
     */
    static taskGet<ThrowOnError extends boolean = false>(options: Options<TaskGetData, ThrowOnError>): import("./client").RequestResult<TaskGetResponses, TaskGetErrors, ThrowOnError, "fields">;
    /**
     * Get public task
     */
    static taskGetPublicTask<ThrowOnError extends boolean = false>(options: Options<TaskGetPublicTaskData, ThrowOnError>): import("./client").RequestResult<TaskGetPublicTaskResponses, TaskGetPublicTaskErrors, ThrowOnError, "fields">;
    /**
     * List public tasks
     */
    static taskGetPublicTasks<ThrowOnError extends boolean = false>(options: Options<TaskGetPublicTasksData, ThrowOnError>): import("./client").RequestResult<TaskGetPublicTasksResponses, TaskGetPublicTasksErrors, ThrowOnError, "fields">;
    /**
     * List tasks
     */
    static taskList<ThrowOnError extends boolean = false>(options: Options<TaskListData, ThrowOnError>): import("./client").RequestResult<TaskListResponses, TaskListErrors, ThrowOnError, "fields">;
    /**
     * List tasks across owned projects
     */
    static taskListOwned<ThrowOnError extends boolean = false>(options: Options<TaskListOwnedData, ThrowOnError>): import("./client").RequestResult<TaskListOwnedResponses, TaskListOwnedErrors, ThrowOnError, "fields">;
    /**
     * Remove file from task
     */
    static taskRemoveFile<ThrowOnError extends boolean = false>(options: Options<TaskRemoveFileData, ThrowOnError>): import("./client").RequestResult<TaskRemoveFileResponses, TaskRemoveFileErrors, ThrowOnError, "fields">;
    /**
     * Update task
     */
    static taskUpdate<ThrowOnError extends boolean = false>(options: Options<TaskUpdateData, ThrowOnError>): import("./client").RequestResult<TaskUpdateResponses, TaskUpdateErrors, ThrowOnError, "fields">;
}
export declare class Trash {
    /**
     * List trashed items
     */
    static trashList<ThrowOnError extends boolean = false>(options: Options<TrashListData, ThrowOnError>): import("./client").RequestResult<TrashListResponses, TrashListErrors, ThrowOnError, "fields">;
    /**
     * Permanently delete trashed item
     */
    static trashPurge<ThrowOnError extends boolean = false>(options: Options<TrashPurgeData, ThrowOnError>): import("./client").RequestResult<TrashPurgeResponses, TrashPurgeErrors, ThrowOnError, "fields">;
    /**
     * Permanently delete a trash scope
     */
    static trashPurgeMany<ThrowOnError extends boolean = false>(options: Options<TrashPurgeManyData, ThrowOnError>): import("./client").RequestResult<TrashPurgeManyResponses, TrashPurgeManyErrors, ThrowOnError, "fields">;
    /**
     * Restore trashed item
     */
    static trashRestore<ThrowOnError extends boolean = false>(options: Options<TrashRestoreData, ThrowOnError>): import("./client").RequestResult<TrashRestoreResponses, TrashRestoreErrors, ThrowOnError, "fields">;
    /**
     * Restore a trash scope
     */
    static trashRestoreMany<ThrowOnError extends boolean = false>(options: Options<TrashRestoreManyData, ThrowOnError>): import("./client").RequestResult<TrashRestoreManyResponses, TrashRestoreManyErrors, ThrowOnError, "fields">;
}
export declare class Typefully {
    /**
     * Create Typefully draft
     */
    static typefullyCreateDraft<ThrowOnError extends boolean = false>(options: Options<TypefullyCreateDraftData, ThrowOnError>): import("./client").RequestResult<TypefullyCreateDraftResponses, TypefullyCreateDraftErrors, ThrowOnError, "fields">;
    /**
     * Get Typefully connection status
     */
    static typefullyGetConnectionStatus<ThrowOnError extends boolean = false>(options?: Options<TypefullyGetConnectionStatusData, ThrowOnError>): import("./client").RequestResult<TypefullyGetConnectionStatusResponses, TypefullyGetConnectionStatusErrors, ThrowOnError, "fields">;
    /**
     * Get Typefully user info
     */
    static typefullyGetMe<ThrowOnError extends boolean = false>(options?: Options<TypefullyGetMeData, ThrowOnError>): import("./client").RequestResult<TypefullyGetMeResponses, TypefullyGetMeErrors, ThrowOnError, "fields">;
    /**
     * List Typefully social sets
     */
    static typefullyGetSocialSets<ThrowOnError extends boolean = false>(options?: Options<TypefullyGetSocialSetsData, ThrowOnError>): import("./client").RequestResult<TypefullyGetSocialSetsResponses, TypefullyGetSocialSetsErrors, ThrowOnError, "fields">;
    /**
     * Remove Typefully API key
     */
    static typefullyRemoveApiKey<ThrowOnError extends boolean = false>(options?: Options<TypefullyRemoveApiKeyData, ThrowOnError>): import("./client").RequestResult<TypefullyRemoveApiKeyResponses, TypefullyRemoveApiKeyErrors, ThrowOnError, "fields">;
    /**
     * Set Typefully API key
     */
    static typefullySetApiKey<ThrowOnError extends boolean = false>(options: Options<TypefullySetApiKeyData, ThrowOnError>): import("./client").RequestResult<TypefullySetApiKeyResponses, TypefullySetApiKeyErrors, ThrowOnError, "fields">;
    /**
     * Upload Typefully media
     */
    static typefullyUploadMedia<ThrowOnError extends boolean = false>(options: Options<TypefullyUploadMediaData, ThrowOnError>): import("./client").RequestResult<TypefullyUploadMediaResponses, TypefullyUploadMediaErrors, ThrowOnError, "fields">;
}
export declare class Users {
    /**
     * Disconnect account
     */
    static userDisconnectAccount<ThrowOnError extends boolean = false>(options: Options<UserDisconnectAccountData, ThrowOnError>): import("./client").RequestResult<UserDisconnectAccountResponses, UserDisconnectAccountErrors, ThrowOnError, "fields">;
    /**
     * Get current user
     */
    static userGetCurrentUser<ThrowOnError extends boolean = false>(options?: Options<UserGetCurrentUserData, ThrowOnError>): import("./client").RequestResult<UserGetCurrentUserResponses, UserGetCurrentUserErrors, ThrowOnError, "fields">;
    /**
     * Get my profile
     */
    static userGetMyProfile<ThrowOnError extends boolean = false>(options?: Options<UserGetMyProfileData, ThrowOnError>): import("./client").RequestResult<UserGetMyProfileResponses, UserGetMyProfileErrors, ThrowOnError, "fields">;
    /**
     * Get user preferences
     */
    static userGetPreferences<ThrowOnError extends boolean = false>(options?: Options<UserGetPreferencesData, ThrowOnError>): import("./client").RequestResult<UserGetPreferencesResponses, UserGetPreferencesErrors, ThrowOnError, "fields">;
    /**
     * Get public profile
     */
    static userGetPublicProfile<ThrowOnError extends boolean = false>(options: Options<UserGetPublicProfileData, ThrowOnError>): import("./client").RequestResult<UserGetPublicProfileResponses, UserGetPublicProfileErrors, ThrowOnError, "fields">;
    /**
     * Get single preference
     */
    static userGetSinglePreference<ThrowOnError extends boolean = false>(options: Options<UserGetSinglePreferenceData, ThrowOnError>): import("./client").RequestResult<UserGetSinglePreferenceResponses, UserGetSinglePreferenceErrors, ThrowOnError, "fields">;
    /**
     * Get user for profile editing
     */
    static userGetUserForEditingProfile<ThrowOnError extends boolean = false>(options?: Options<UserGetUserForEditingProfileData, ThrowOnError>): import("./client").RequestResult<UserGetUserForEditingProfileResponses, UserGetUserForEditingProfileErrors, ThrowOnError, "fields">;
    /**
     * Mark user as onboarded
     */
    static userMarkUserAsOnboarded<ThrowOnError extends boolean = false>(options?: Options<UserMarkUserAsOnboardedData, ThrowOnError>): import("./client").RequestResult<UserMarkUserAsOnboardedResponses, UserMarkUserAsOnboardedErrors, ThrowOnError, "fields">;
    /**
     * Reset user onboarding
     */
    static userResetUserOnboarding<ThrowOnError extends boolean = false>(options?: Options<UserResetUserOnboardingData, ThrowOnError>): import("./client").RequestResult<UserResetUserOnboardingResponses, UserResetUserOnboardingErrors, ThrowOnError, "fields">;
    /**
     * Update preference
     */
    static userUpdatePreference<ThrowOnError extends boolean = false>(options: Options<UserUpdatePreferenceData, ThrowOnError>): import("./client").RequestResult<UserUpdatePreferenceResponses, UserUpdatePreferenceErrors, ThrowOnError, "fields">;
    /**
     * Update profile
     */
    static userUpdateProfile<ThrowOnError extends boolean = false>(options: Options<UserUpdateProfileData, ThrowOnError>): import("./client").RequestResult<UserUpdateProfileResponses, UserUpdateProfileErrors, ThrowOnError, "fields">;
}
export declare class UtImages {
    /**
     * Delete UT image
     */
    static utImageDelete<ThrowOnError extends boolean = false>(options: Options<UtImageDeleteData, ThrowOnError>): import("./client").RequestResult<UtImageDeleteResponses, UtImageDeleteErrors, ThrowOnError, "fields">;
}
