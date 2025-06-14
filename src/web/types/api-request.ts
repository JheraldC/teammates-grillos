/* tslint:disable */
/* eslint-disable */

export interface AccountCreateRequest extends BasicRequest {
  instructorEmail: string;
  instructorName: string;
  instructorInstitution: string;
  instructorComments?: string;
  captchaResponse?: string;
}

export interface AccountRequestRejectionRequest extends BasicRequest {
  reasonTitle?: string;
  reasonBody?: string;
}

export interface AccountRequestUpdateRequest extends BasicRequest {
  name: string;
  email: string;
  institute: string;
  status: AccountRequestStatus;
  comments?: string;
}

export interface BasicRequest {
}

export interface CourseArchiveRequest extends BasicRequest {
  archiveStatus: boolean;
}

export interface CourseBasicRequest extends BasicRequest {
  courseName: string;
  timeZone: string;
}

export interface CourseCreateRequest extends CourseBasicRequest {
  courseId: string;
}

export interface CourseUpdateRequest extends CourseBasicRequest {
}

export interface ErrorReportRequest extends BasicRequest {
  content: string;
  subject: string;
  requestId: string;
}

export interface FeedbackQuestionBasicRequest extends BasicRequest {
  questionNumber: number;
  questionBrief: string;
  questionDescription: string;
  questionDetails: { [index: string]: any };
  questionType: FeedbackQuestionType;
  giverType: FeedbackParticipantType;
  recipientType: FeedbackParticipantType;
  numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting;
  customNumberOfEntitiesToGiveFeedbackTo: number;
  showResponsesTo: FeedbackVisibilityType[];
  showGiverNameTo: FeedbackVisibilityType[];
  showRecipientNameTo: FeedbackVisibilityType[];
}

export interface FeedbackQuestionCreateRequest extends FeedbackQuestionBasicRequest {
}

export interface FeedbackQuestionUpdateRequest extends FeedbackQuestionBasicRequest {
}

export interface FeedbackResponseCommentBasicRequest extends BasicRequest {
  commentText: string;
  showCommentTo: CommentVisibilityType[];
  showGiverNameTo: CommentVisibilityType[];
}

export interface FeedbackResponseCommentCreateRequest extends FeedbackResponseCommentBasicRequest {
}

export interface FeedbackResponseCommentUpdateRequest extends FeedbackResponseCommentBasicRequest {
}

export interface FeedbackResponsesRequest extends BasicRequest {
  responses: FeedbackResponseRequest[];
}

export interface FeedbackResponseRequest extends BasicRequest {
  recipient: string;
  responseDetails: FeedbackResponseDetails;
}

export interface FeedbackSessionBasicRequest extends BasicRequest {
  instructions: string;
  submissionStartTimestamp: number;
  submissionEndTimestamp: number;
  gracePeriod: number;
  sessionVisibleSetting: SessionVisibleSetting;
  customSessionVisibleTimestamp?: number;
  responseVisibleSetting: ResponseVisibleSetting;
  customResponseVisibleTimestamp?: number;
  isClosingSoonEmailEnabled: boolean;
  isPublishedEmailEnabled: boolean;
}

export interface FeedbackSessionCreateRequest extends FeedbackSessionBasicRequest {
  feedbackSessionName: string;
  toCopyCourseId?: string;
  toCopySessionName?: string;
}

export interface FeedbackSessionRemindRequest extends BasicRequest {
  courseId: string;
  feedbackSessionName: string;
  requestingInstructorId: string;
  usersToRemind: string[];
  isSendingCopyToInstructor: boolean;
}

export interface FeedbackSessionRespondentRemindRequest extends BasicRequest {
  usersToRemind: string[];
  isSendingCopyToInstructor: boolean;
}

export interface FeedbackSessionUpdateRequest extends FeedbackSessionBasicRequest {
  studentDeadlines: { [index: string]: number };
  instructorDeadlines: { [index: string]: number };
}

export interface InstructorCreateRequest extends BasicRequest {
  id?: string;
  name: string;
  email: string;
  role: InstructorPermissionRole;
  displayName?: string;
  isDisplayedToStudent: boolean;
}

export interface InstructorPrivilegeUpdateRequest extends BasicRequest {
  privileges: InstructorPrivileges;
}

export interface MarkNotificationAsReadRequest extends BasicRequest {
  notificationId: string;
  endTimestamp: number;
}

export interface NotificationBasicRequest extends BasicRequest {
  startTimestamp: number;
  endTimestamp: number;
  style: NotificationStyle;
  targetUser: NotificationTargetUser;
  title: string;
  message: string;
}

export interface NotificationCreateRequest extends NotificationBasicRequest {
}

export interface NotificationUpdateRequest extends NotificationBasicRequest {
}

export interface SendEmailRequest extends BasicRequest {
  email: EmailWrapper;
}

export interface StudentUpdateRequest extends BasicRequest {
  name: string;
  email: string;
  team: string;
  section: string;
  comments: string;
  isSessionSummarySendEmail: boolean;
}

export interface StudentsEnrollRequest extends BasicRequest {
  studentEnrollRequests: StudentEnrollRequest[];
}

export interface StudentEnrollRequest extends BasicRequest {
  name: string;
  email: string;
  team: string;
  section: string;
  comments: string;
}

export interface FeedbackResponseDetails {
  questionType: FeedbackQuestionType;
}

export interface InstructorPrivileges {
  courseLevel: InstructorPermissionSet;
  sectionLevel: { [index: string]: InstructorPermissionSet };
  sessionLevel: { [index: string]: { [index: string]: InstructorPermissionSet } };
}

export interface EmailWrapper {
  type: EmailType;
  senderName: string;
  senderEmail: string;
  replyTo: string;
  recipient: string;
  bcc: string;
  subject: string;
  content: string;
  isCopy: boolean;
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

export enum Intent {
  FULL_DETAIL = "FULL_DETAIL",
  INSTRUCTOR_SUBMISSION = "INSTRUCTOR_SUBMISSION",
  STUDENT_SUBMISSION = "STUDENT_SUBMISSION",
  INSTRUCTOR_RESULT = "INSTRUCTOR_RESULT",
  STUDENT_RESULT = "STUDENT_RESULT",
}

export enum AccountRequestStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
  REGISTERED = "REGISTERED",
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

export enum NumberOfEntitiesToGiveFeedbackToSetting {
  CUSTOM = "CUSTOM",
  UNLIMITED = "UNLIMITED",
}

export enum FeedbackVisibilityType {
  RECIPIENT = "RECIPIENT",
  GIVER_TEAM_MEMBERS = "GIVER_TEAM_MEMBERS",
  RECIPIENT_TEAM_MEMBERS = "RECIPIENT_TEAM_MEMBERS",
  STUDENTS = "STUDENTS",
  INSTRUCTORS = "INSTRUCTORS",
}

export enum CommentVisibilityType {
  GIVER = "GIVER",
  RECIPIENT = "RECIPIENT",
  GIVER_TEAM_MEMBERS = "GIVER_TEAM_MEMBERS",
  RECIPIENT_TEAM_MEMBERS = "RECIPIENT_TEAM_MEMBERS",
  STUDENTS = "STUDENTS",
  INSTRUCTORS = "INSTRUCTORS",
}

export enum SessionVisibleSetting {
  CUSTOM = "CUSTOM",
  AT_OPEN = "AT_OPEN",
}

export enum ResponseVisibleSetting {
  CUSTOM = "CUSTOM",
  AT_VISIBLE = "AT_VISIBLE",
  LATER = "LATER",
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
