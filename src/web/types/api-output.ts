/* tslint:disable */
/* eslint-disable */

export interface DefaultLogDetails extends LogDetails {
}

export interface EmailSentLogDetails extends LogDetails {
  emailRecipient?: string;
  emailSubject?: string;
  emailContent?: string;
  emailType: EmailType;
  emailStatus: number;
  emailStatusMessage: string;
}

export interface ExceptionLogDetails extends LogDetails {
  exceptionClass: string;
  exceptionClasses: string[];
  exceptionStackTraces: string[][];
  exceptionMessages?: string[];
  loggerSourceLocation: SourceLocation;
}

export interface FeedbackSessionAuditLogDetails extends LogDetails {
  courseId?: string;
  feedbackSessionId?: string;
  feedbackSessionName?: string;
  studentId?: string;
  studentEmail?: string;
  accessType: string;
}

export interface GeneralLogEntry {
  severity: LogSeverity;
  trace: string;
  insertId: string;
  resourceIdentifier: { [index: string]: string };
  sourceLocation: SourceLocation;
  timestamp: number;
  message?: string;
  details?: LogDetails;
}

export interface InstanceLogDetails extends LogDetails {
  instanceId: string;
  instanceEvent: string;
}

export interface LogDetails {
  event: LogEvent;
  message?: string;
}

export interface QueryLogsParams {
  severity: LogSeverity;
  minSeverity: LogSeverity;
  startTime: number;
  endTime: number;
  traceId: string;
  actionClass: string;
  userInfoParams: RequestLogUser;
  logEvent: string;
  sourceLocation: SourceLocation;
  exceptionClass: string;
  latency: string;
  status: string;
  version: string;
  extraFilters: string;
  order: string;
  pageSize: number;
}

export interface Builder {
  queryLogsParams: QueryLogsParams;
}

export interface RequestLogDetails extends LogDetails {
  responseStatus: number;
  responseTime: number;
  requestMethod: string;
  requestUrl: string;
  userAgent: string;
  instanceId: string;
  webVersion: string;
  referrer: string;
  requestParams?: { [index: string]: any };
  requestHeaders?: { [index: string]: any };
  requestBody?: string;
  actionClass?: string;
  userInfo?: RequestLogUser;
}

export interface RequestLogUser {
  regkey: string;
  email: string;
  googleId: string;
}

export interface SourceLocation {
  file: string;
  line: number;
  function: string;
}

export interface FeedbackConstantSumQuestionDetails extends FeedbackQuestionDetails {
  constSumOptions: string[];
  distributeToRecipients: boolean;
  pointsPerOption: boolean;
  forceUnevenDistribution: boolean;
  distributePointsFor: string;
  points: number;
  minPoint?: number;
  maxPoint?: number;
}

export interface FeedbackConstantSumResponseDetails extends FeedbackResponseDetails {
  answers: number[];
}

export interface FeedbackContributionQuestionDetails extends FeedbackQuestionDetails {
  isZeroSum: boolean;
  isNotSureAllowed: boolean;
}

export interface ContributionStatistics {
  results: { [index: string]: ContributionStatisticsEntry };
}

export interface ContributionStatisticsEntry {
  claimed: number;
  perceived: number;
  claimedOthers: { [index: string]: number };
  perceivedOthers: number[];
}

export interface FeedbackContributionResponseDetails extends FeedbackResponseDetails {
  answer: number;
}

export interface FeedbackMcqQuestionDetails extends FeedbackQuestionDetails {
  hasAssignedWeights: boolean;
  mcqWeights: number[];
  mcqOtherWeight: number;
  mcqChoices: string[];
  otherEnabled: boolean;
  questionDropdownEnabled: boolean;
  generateOptionsFor: FeedbackParticipantType;
}

export interface FeedbackMcqResponseDetails extends FeedbackResponseDetails {
  answer: string;
  isOther: boolean;
  otherFieldContent: string;
}

export interface FeedbackMsqQuestionDetails extends FeedbackQuestionDetails {
  msqChoices: string[];
  otherEnabled: boolean;
  hasAssignedWeights: boolean;
  msqWeights: number[];
  msqOtherWeight: number;
  generateOptionsFor: FeedbackParticipantType;
  maxSelectableChoices: number;
  minSelectableChoices: number;
}

export interface FeedbackMsqResponseDetails extends FeedbackResponseDetails {
  answers: string[];
  isOther: boolean;
  otherFieldContent: string;
}

export interface FeedbackNumericalScaleQuestionDetails extends FeedbackQuestionDetails {
  minScale: number;
  maxScale: number;
  step: number;
}

export interface FeedbackNumericalScaleResponseDetails extends FeedbackResponseDetails {
  answer: number;
}

export interface FeedbackQuestionDetails {
  questionType: FeedbackQuestionType;
  questionText: string;
}

export interface FeedbackRankOptionsQuestionDetails extends FeedbackRankQuestionDetails {
  options: string[];
}

export interface FeedbackRankOptionsResponseDetails extends FeedbackResponseDetails {
  answers: number[];
}

export interface FeedbackRankQuestionDetails extends FeedbackQuestionDetails {
  minOptionsToBeRanked: number;
  maxOptionsToBeRanked: number;
  areDuplicatesAllowed: boolean;
}

export interface FeedbackRankRecipientsQuestionDetails extends FeedbackRankQuestionDetails {
}

export interface FeedbackRankRecipientsResponseDetails extends FeedbackResponseDetails {
  answer: number;
}

export interface FeedbackResponseDetails {
  questionType: FeedbackQuestionType;
}

export interface FeedbackRubricQuestionDetails extends FeedbackQuestionDetails {
  hasAssignedWeights: boolean;
  rubricWeightsForEachCell: number[][];
  rubricChoices: string[];
  rubricSubQuestions: string[];
  rubricDescriptions: string[][];
}

export interface FeedbackRubricResponseDetails extends FeedbackResponseDetails {
  answer: number[];
}

export interface FeedbackTextQuestionDetails extends FeedbackQuestionDetails {
  recommendedLength?: number;
  shouldAllowRichText: boolean;
}

export interface FeedbackTextResponseDetails extends FeedbackResponseDetails {
  answer: string;
}

export interface Account extends ApiOutput {
  googleId: string;
  name: string;
  email: string;
  readNotifications: { [index: string]: number };
}

export interface AccountRequest extends ApiOutput {
  id: string;
  email: string;
  name: string;
  institute: string;
  registrationKey: string;
  status: AccountRequestStatus;
  comments?: string;
  registeredAt?: number;
  createdAt: number;
}

export interface AccountRequests extends ApiOutput {
  accountRequests: AccountRequest[];
}

export interface Accounts extends ApiOutput {
  accounts: Account[];
}

export interface ActionClasses extends ApiOutput {
  actionClasses: string[];
}

export interface ApiOutput {
  requestId?: string;
}

export interface AuthInfo extends ApiOutput {
  studentLoginUrl?: string;
  instructorLoginUrl?: string;
  adminLoginUrl?: string;
  maintainerLoginUrl?: string;
  user?: UserInfo;
  masquerade: boolean;
}

export interface CourseArchive extends ApiOutput {
  courseId: string;
  isArchived: boolean;
}

export interface Course extends ApiOutput {
  courseId: string;
  courseName: string;
  timeZone: string;
  institute: string;
  isMigrated?: boolean;
  creationTimestamp: number;
  deletionTimestamp: number;
  privileges?: InstructorPermissionSet;
}

export interface CourseSectionNames extends ApiOutput {
  sectionNames: string[];
}

export interface Courses extends ApiOutput {
  courses: Course[];
}

export interface DeadlineExtension extends ApiOutput {
  courseId: string;
  feedbackSessionName: string;
  userEmail: string;
  isInstructor: boolean;
  sentClosingSoonEmail: boolean;
  endTime: number;
}

export interface Email extends ApiOutput {
  recipient: string;
  subject: string;
  content: string;
}

export interface EnrollStudents extends ApiOutput {
  studentsData: Students;
  unsuccessfulEnrolls: EnrollErrorResults[];
}

export interface EnrollErrorResults {
  studentEmail: string;
  errorMessage: string;
}

export interface FeedbackQuestion extends ApiOutput {
  feedbackQuestionId: string;
  questionNumber: number;
  questionBrief: string;
  questionDescription: string;
  questionDetails: FeedbackQuestionDetails;
  questionType: FeedbackQuestionType;
  giverType: FeedbackParticipantType;
  recipientType: FeedbackParticipantType;
  numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting;
  customNumberOfEntitiesToGiveFeedbackTo: number;
  showResponsesTo: FeedbackVisibilityType[];
  showGiverNameTo: FeedbackVisibilityType[];
  showRecipientNameTo: FeedbackVisibilityType[];
}

export interface FeedbackQuestionRecipient extends ApiOutput {
  name: string;
  identifier: string;
  section?: string;
  team?: string;
}

export interface FeedbackQuestionRecipients extends ApiOutput {
  recipients: FeedbackQuestionRecipient[];
}

export interface FeedbackQuestions extends ApiOutput {
  questions: FeedbackQuestion[];
}

export interface FeedbackResponseComment extends ApiOutput {
  commentGiver: string;
  lastEditorEmail: string;
  feedbackResponseCommentId: number;
  commentText: string;
  createdAt: number;
  lastEditedAt: number;
  isVisibilityFollowingFeedbackQuestion: boolean;
  showGiverNameTo: CommentVisibilityType[];
  showCommentTo: CommentVisibilityType[];
}

export interface FeedbackResponse extends ApiOutput {
  feedbackResponseId: string;
  giverIdentifier: string;
  recipientIdentifier: string;
  responseDetails: FeedbackResponseDetails;
  giverComment?: FeedbackResponseComment;
}

export interface FeedbackResponses extends ApiOutput {
  responses: FeedbackResponse[];
}

export interface FeedbackSession extends ApiOutput {
  feedbackSessionId?: string;
  courseId: string;
  timeZone: string;
  feedbackSessionName: string;
  instructions: string;
  submissionStartTimestamp: number;
  submissionEndTimestamp: number;
  submissionEndWithExtensionTimestamp?: number;
  sessionVisibleFromTimestamp?: number;
  resultVisibleFromTimestamp?: number;
  gracePeriod: number;
  sessionVisibleSetting: SessionVisibleSetting;
  customSessionVisibleTimestamp?: number;
  responseVisibleSetting: ResponseVisibleSetting;
  customResponseVisibleTimestamp?: number;
  submissionStatus: FeedbackSessionSubmissionStatus;
  publishStatus: FeedbackSessionPublishStatus;
  isClosingSoonEmailEnabled: boolean;
  isPublishedEmailEnabled: boolean;
  createdAtTimestamp: number;
  deletedAtTimestamp?: number;
  privileges?: InstructorPermissionSet;
  studentDeadlines: { [index: string]: number };
  instructorDeadlines: { [index: string]: number };
}

export interface FeedbackSessionLog {
  feedbackSessionData: FeedbackSession;
  feedbackSessionLogEntries: FeedbackSessionLogEntry[];
}

export interface FeedbackSessionLogEntry {
  studentData: Student;
  feedbackSessionLogType: FeedbackSessionLogType;
  timestamp: number;
}

export interface FeedbackSessionLogs extends ApiOutput {
  feedbackSessionLogs: FeedbackSessionLog[];
}

export interface FeedbackSessionStats extends ApiOutput {
  submittedTotal: number;
  expectedTotal: number;
}

export interface FeedbackSessionSubmittedGiverSet extends ApiOutput {
  giverIdentifiers: string[];
}

export interface FeedbackSessions extends ApiOutput {
  feedbackSessions: FeedbackSession[];
}

export interface GeneralLogs extends ApiOutput {
  logEntries: GeneralLogEntry[];
  hasNextPage: boolean;
}

export interface HasResponses extends ApiOutput {
  hasResponses: boolean;
  hasResponsesBySession?: { [index: string]: boolean };
}

export interface Instructor extends ApiOutput {
  googleId?: string;
  courseId: string;
  email: string;
  isDisplayedToStudents?: boolean;
  displayedToStudentsAs?: string;
  name: string;
  role?: InstructorPermissionRole;
  joinState: JoinState;
  key?: string;
  institute?: string;
}

export interface InstructorPrivilege extends ApiOutput {
  privileges: InstructorPrivileges;
}

export interface Instructors extends ApiOutput {
  instructors: Instructor[];
}

export interface JoinLink extends ApiOutput {
  joinLink: string;
}

export interface JoinStatus extends ApiOutput {
  hasJoined: boolean;
}

export interface MessageOutput extends ApiOutput {
  message: string;
}

export interface Notification extends ApiOutput {
  notificationId: string;
  startTimestamp: number;
  endTimestamp: number;
  createdAt: number;
  style: NotificationStyle;
  targetUser: NotificationTargetUser;
  title: string;
  message: string;
  shown: boolean;
}

export interface Notifications extends ApiOutput {
  notifications: Notification[];
}

export interface OngoingSession {
  sessionStatus: string;
  instructorHomePageLink: string;
  startTime: number;
  endTime: number;
  creatorEmail: string;
  courseId: string;
  feedbackSessionName: string;
}

export interface OngoingSessions extends ApiOutput {
  totalOngoingSessions: number;
  totalOpenSessions: number;
  totalClosedSessions: number;
  totalAwaitingSessions: number;
  totalInstitutes: number;
  sessions: { [index: string]: OngoingSession[] };
}

export interface ReadNotifications extends ApiOutput {
  readNotifications: string[];
}

export interface RegenerateKey extends ApiOutput {
  message: string;
  newRegistrationKey: string;
}

export interface RegkeyValidity extends ApiOutput {
  isValid: boolean;
  isUsed: boolean;
  isAllowedAccess: boolean;
}

export interface SendLoginEmailResponse extends ApiOutput {
  isEmailSent: boolean;
  message: string;
}

export interface SessionLinksRecoveryResponse extends ApiOutput {
  isEmailSent: boolean;
  message: string;
}

export interface SessionResults extends ApiOutput {
  questions: QuestionOutput[];
}

export interface CommentOutput extends FeedbackResponseComment {
  commentGiverName?: string;
  lastEditorName?: string;
}

export interface QuestionOutput {
  feedbackQuestion: FeedbackQuestion;
  questionStatistics: string;
  allResponses: ResponseOutput[];
  hasResponseButNotVisibleForPreview: boolean;
  hasCommentNotVisibleForPreview: boolean;
  responsesToSelf: ResponseOutput[];
  responsesFromSelf: ResponseOutput[];
  otherResponses: ResponseOutput[][];
}

export interface ResponseOutput {
  isMissingResponse: boolean;
  responseId: string;
  giver: string;
  relatedGiverEmail?: string;
  giverTeam: string;
  giverEmail?: string;
  giverSection: string;
  recipient: string;
  recipientTeam: string;
  recipientEmail?: string;
  recipientSection: string;
  responseDetails: FeedbackResponseDetails;
  participantComment?: CommentOutput;
  instructorComments: CommentOutput[];
}

export interface Student extends ApiOutput {
  studentId?: string;
  email: string;
  courseId: string;
  name: string;
  googleId?: string;
  comments?: string;
  key?: string;
  institute?: string;
  joinState?: JoinState;
  teamName: string;
  sectionName: string;
}

export interface Students extends ApiOutput {
  students: Student[];
}

export interface TimeZones extends ApiOutput {
  version: string;
  offsets: { [index: string]: number };
}

export interface UsageStatistics extends ApiOutput {
  startTime: number;
  timePeriod: number;
  numResponses: number;
  numCourses: number;
  numStudents: number;
  numInstructors: number;
  numAccountRequests: number;
  numEmails: number;
  numSubmissions: number;
}

export interface UsageStatisticsRange extends ApiOutput {
  result: UsageStatistics[];
}

export interface UserInfo {
  id: string;
  isAdmin: boolean;
  isInstructor: boolean;
  isStudent: boolean;
  isMaintainer: boolean;
}

export interface InstructorPermissionSet {
  canModifyCourse: boolean;
  canModifyInstructor: boolean;
  canModifySession: boolean;
  canModifyStudent: boolean;
  canViewStudentInSections: boolean;
  canViewSessionInSections: boolean;
  canSubmitSessionInSections: boolean;
  canModifySessionCommentsInSections: boolean;
}

export interface InstructorPrivileges {
  courseLevel: InstructorPermissionSet;
  sectionLevel: { [index: string]: InstructorPermissionSet };
  sessionLevel: { [index: string]: { [index: string]: InstructorPermissionSet } };
}

export enum FeedbackSessionLogType {
  ACCESS = "access",
  SUBMISSION = "submission",
  VIEW_RESULT = "view result",
}

export enum LogEvent {
  REQUEST_LOG = "REQUEST_LOG",
  EXCEPTION_LOG = "EXCEPTION_LOG",
  INSTANCE_LOG = "INSTANCE_LOG",
  EMAIL_SENT = "EMAIL_SENT",
  FEEDBACK_SESSION_AUDIT = "FEEDBACK_SESSION_AUDIT",
  DEFAULT_LOG = "DEFAULT_LOG",
}

export enum LogSeverity {
  DEFAULT = "DEFAULT",
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  CRITICAL = "CRITICAL",
}

export enum FeedbackConstantSumDistributePointsType {
  DISTRIBUTE_ALL_UNEVENLY = "All options",
  DISTRIBUTE_SOME_UNEVENLY = "At least some options",
  NONE = "None",
}

export enum FeedbackQuestionType {
  TEXT = "TEXT",
  MCQ = "MCQ",
  MSQ = "MSQ",
  NUMSCALE = "NUMSCALE",
  CONSTSUM = "CONSTSUM",
  CONSTSUM_OPTIONS = "CONSTSUM_OPTIONS",
  CONSTSUM_RECIPIENTS = "CONSTSUM_RECIPIENTS",
  CONTRIB = "CONTRIB",
  RUBRIC = "RUBRIC",
  RANK_OPTIONS = "RANK_OPTIONS",
  RANK_RECIPIENTS = "RANK_RECIPIENTS",
}

export enum CommentVisibilityType {
  GIVER = "GIVER",
  RECIPIENT = "RECIPIENT",
  GIVER_TEAM_MEMBERS = "GIVER_TEAM_MEMBERS",
  RECIPIENT_TEAM_MEMBERS = "RECIPIENT_TEAM_MEMBERS",
  STUDENTS = "STUDENTS",
  INSTRUCTORS = "INSTRUCTORS",
}

export enum FeedbackSessionPublishStatus {
  PUBLISHED = "PUBLISHED",
  NOT_PUBLISHED = "NOT_PUBLISHED",
}

export enum FeedbackSessionSubmissionStatus {
  NOT_VISIBLE = "NOT_VISIBLE",
  VISIBLE_NOT_OPEN = "VISIBLE_NOT_OPEN",
  OPEN = "OPEN",
  GRACE_PERIOD = "GRACE_PERIOD",
  CLOSED = "CLOSED",
}

export enum FeedbackVisibilityType {
  RECIPIENT = "RECIPIENT",
  GIVER_TEAM_MEMBERS = "GIVER_TEAM_MEMBERS",
  RECIPIENT_TEAM_MEMBERS = "RECIPIENT_TEAM_MEMBERS",
  STUDENTS = "STUDENTS",
  INSTRUCTORS = "INSTRUCTORS",
}

export enum JoinState {
  JOINED = "JOINED",
  NOT_JOINED = "NOT_JOINED",
}

export enum NumberOfEntitiesToGiveFeedbackToSetting {
  CUSTOM = "CUSTOM",
  UNLIMITED = "UNLIMITED",
}

export enum ResponseVisibleSetting {
  CUSTOM = "CUSTOM",
  AT_VISIBLE = "AT_VISIBLE",
  LATER = "LATER",
}

export enum SessionVisibleSetting {
  CUSTOM = "CUSTOM",
  AT_OPEN = "AT_OPEN",
}

export enum EmailType {
  DEADLINE_EXTENSION_GRANTED = "DEADLINE_EXTENSION_GRANTED",
  DEADLINE_EXTENSION_UPDATED = "DEADLINE_EXTENSION_UPDATED",
  DEADLINE_EXTENSION_REVOKED = "DEADLINE_EXTENSION_REVOKED",
  FEEDBACK_OPENING_SOON = "FEEDBACK_OPENING_SOON",
  FEEDBACK_OPENED = "FEEDBACK_OPENED",
  FEEDBACK_SESSION_REMINDER = "FEEDBACK_SESSION_REMINDER",
  FEEDBACK_CLOSING_SOON = "FEEDBACK_CLOSING_SOON",
  FEEDBACK_CLOSED = "FEEDBACK_CLOSED",
  FEEDBACK_PUBLISHED = "FEEDBACK_PUBLISHED",
  FEEDBACK_UNPUBLISHED = "FEEDBACK_UNPUBLISHED",
  STUDENT_EMAIL_CHANGED = "STUDENT_EMAIL_CHANGED",
  STUDENT_COURSE_LINKS_REGENERATED = "STUDENT_COURSE_LINKS_REGENERATED",
  INSTRUCTOR_COURSE_LINKS_REGENERATED = "INSTRUCTOR_COURSE_LINKS_REGENERATED",
  NEW_INSTRUCTOR_ACCOUNT = "NEW_INSTRUCTOR_ACCOUNT",
  STUDENT_COURSE_JOIN = "STUDENT_COURSE_JOIN",
  STUDENT_COURSE_REJOIN_AFTER_GOOGLE_ID_RESET = "STUDENT_COURSE_REJOIN_AFTER_GOOGLE_ID_RESET",
  NEW_ACCOUNT_REQUEST_ADMIN_ALERT = "NEW_ACCOUNT_REQUEST_ADMIN_ALERT",
  NEW_ACCOUNT_REQUEST_ACKNOWLEDGEMENT = "NEW_ACCOUNT_REQUEST_ACKNOWLEDGEMENT",
  ACCOUNT_REQUEST_REJECTION = "ACCOUNT_REQUEST_REJECTION",
  INSTRUCTOR_COURSE_JOIN = "INSTRUCTOR_COURSE_JOIN",
  INSTRUCTOR_COURSE_REJOIN_AFTER_GOOGLE_ID_RESET = "INSTRUCTOR_COURSE_REJOIN_AFTER_GOOGLE_ID_RESET",
  USER_COURSE_REGISTER = "USER_COURSE_REGISTER",
  SEVERE_LOGS_COMPILATION = "SEVERE_LOGS_COMPILATION",
  SESSION_LINKS_RECOVERY = "SESSION_LINKS_RECOVERY",
  LOGIN = "LOGIN",
}

export enum FeedbackParticipantType {
  SELF = "SELF",
  STUDENTS = "STUDENTS",
  STUDENTS_IN_SAME_SECTION = "STUDENTS_IN_SAME_SECTION",
  STUDENTS_EXCLUDING_SELF = "STUDENTS_EXCLUDING_SELF",
  INSTRUCTORS = "INSTRUCTORS",
  TEAMS = "TEAMS",
  TEAMS_IN_SAME_SECTION = "TEAMS_IN_SAME_SECTION",
  TEAMS_EXCLUDING_SELF = "TEAMS_EXCLUDING_SELF",
  OWN_TEAM = "OWN_TEAM",
  OWN_TEAM_MEMBERS = "OWN_TEAM_MEMBERS",
  OWN_TEAM_MEMBERS_INCLUDING_SELF = "OWN_TEAM_MEMBERS_INCLUDING_SELF",
  RECEIVER = "RECEIVER",
  RECEIVER_TEAM_MEMBERS = "RECEIVER_TEAM_MEMBERS",
  NONE = "NONE",
  GIVER = "GIVER",
}

export enum AccountRequestStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
  REGISTERED = "REGISTERED",
}

export enum InstructorPermissionRole {
  INSTRUCTOR_PERMISSION_ROLE_COOWNER = "INSTRUCTOR_PERMISSION_ROLE_COOWNER",
  INSTRUCTOR_PERMISSION_ROLE_MANAGER = "INSTRUCTOR_PERMISSION_ROLE_MANAGER",
  INSTRUCTOR_PERMISSION_ROLE_OBSERVER = "INSTRUCTOR_PERMISSION_ROLE_OBSERVER",
  INSTRUCTOR_PERMISSION_ROLE_TUTOR = "INSTRUCTOR_PERMISSION_ROLE_TUTOR",
  INSTRUCTOR_PERMISSION_ROLE_CUSTOM = "INSTRUCTOR_PERMISSION_ROLE_CUSTOM",
}

export enum NotificationStyle {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  SUCCESS = "SUCCESS",
  DANGER = "DANGER",
  WARNING = "WARNING",
  INFO = "INFO",
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export enum NotificationTargetUser {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR",
  GENERAL = "GENERAL",
}
