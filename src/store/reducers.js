import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CATEGORY_LIST:
    case types.API_V1_CATEGORY_LIST_SUCCEEDED:
    case types.API_V1_CATEGORY_LIST_FAILED:
    case types.API_V1_CATEGORY_CREATE:
    case types.API_V1_CATEGORY_CREATE_SUCCEEDED:
    case types.API_V1_CATEGORY_CREATE_FAILED:
    case types.API_V1_CATEGORY_READ:
    case types.API_V1_CATEGORY_READ_SUCCEEDED:
    case types.API_V1_CATEGORY_READ_FAILED:
    case types.API_V1_CATEGORY_UPDATE:
    case types.API_V1_CATEGORY_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_UPDATE_FAILED:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED:
    case types.API_V1_CATEGORY_DELETE:
    case types.API_V1_CATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_CATEGORY_DELETE_FAILED:
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
    case types.API_V1_FAQ_LIST:
    case types.API_V1_FAQ_LIST_SUCCEEDED:
    case types.API_V1_FAQ_LIST_FAILED:
    case types.API_V1_FAQ_CREATE:
    case types.API_V1_FAQ_CREATE_SUCCEEDED:
    case types.API_V1_FAQ_CREATE_FAILED:
    case types.API_V1_FAQ_READ:
    case types.API_V1_FAQ_READ_SUCCEEDED:
    case types.API_V1_FAQ_READ_FAILED:
    case types.API_V1_FAQ_UPDATE:
    case types.API_V1_FAQ_UPDATE_SUCCEEDED:
    case types.API_V1_FAQ_UPDATE_FAILED:
    case types.API_V1_FAQ_PARTIAL_UPDATE:
    case types.API_V1_FAQ_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_FAQ_PARTIAL_UPDATE_FAILED:
    case types.API_V1_FAQ_DELETE:
    case types.API_V1_FAQ_DELETE_SUCCEEDED:
    case types.API_V1_FAQ_DELETE_FAILED:
    case types.API_V1_FAVORITES_LIST:
    case types.API_V1_FAVORITES_LIST_SUCCEEDED:
    case types.API_V1_FAVORITES_LIST_FAILED:
    case types.API_V1_FAVORITES_CREATE:
    case types.API_V1_FAVORITES_CREATE_SUCCEEDED:
    case types.API_V1_FAVORITES_CREATE_FAILED:
    case types.API_V1_FAVORITES_READ:
    case types.API_V1_FAVORITES_READ_SUCCEEDED:
    case types.API_V1_FAVORITES_READ_FAILED:
    case types.API_V1_FAVORITES_UPDATE:
    case types.API_V1_FAVORITES_UPDATE_SUCCEEDED:
    case types.API_V1_FAVORITES_UPDATE_FAILED:
    case types.API_V1_FAVORITES_PARTIAL_UPDATE:
    case types.API_V1_FAVORITES_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_FAVORITES_PARTIAL_UPDATE_FAILED:
    case types.API_V1_FAVORITES_DELETE:
    case types.API_V1_FAVORITES_DELETE_SUCCEEDED:
    case types.API_V1_FAVORITES_DELETE_FAILED:
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
    case types.API_V1_LOCATION_LIST:
    case types.API_V1_LOCATION_LIST_SUCCEEDED:
    case types.API_V1_LOCATION_LIST_FAILED:
    case types.API_V1_LOCATION_CREATE:
    case types.API_V1_LOCATION_CREATE_SUCCEEDED:
    case types.API_V1_LOCATION_CREATE_FAILED:
    case types.API_V1_LOCATION_READ:
    case types.API_V1_LOCATION_READ_SUCCEEDED:
    case types.API_V1_LOCATION_READ_FAILED:
    case types.API_V1_LOCATION_UPDATE:
    case types.API_V1_LOCATION_UPDATE_SUCCEEDED:
    case types.API_V1_LOCATION_UPDATE_FAILED:
    case types.API_V1_LOCATION_PARTIAL_UPDATE:
    case types.API_V1_LOCATION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_LOCATION_PARTIAL_UPDATE_FAILED:
    case types.API_V1_LOCATION_DELETE:
    case types.API_V1_LOCATION_DELETE_SUCCEEDED:
    case types.API_V1_LOCATION_DELETE_FAILED:
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
    case types.API_V1_MYSCHEDULE_LIST:
    case types.API_V1_MYSCHEDULE_LIST_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_LIST_FAILED:
    case types.API_V1_MYSCHEDULE_CREATE:
    case types.API_V1_MYSCHEDULE_CREATE_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_CREATE_FAILED:
    case types.API_V1_MYSCHEDULE_READ:
    case types.API_V1_MYSCHEDULE_READ_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_READ_FAILED:
    case types.API_V1_MYSCHEDULE_UPDATE:
    case types.API_V1_MYSCHEDULE_UPDATE_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_UPDATE_FAILED:
    case types.API_V1_MYSCHEDULE_PARTIAL_UPDATE:
    case types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_FAILED:
    case types.API_V1_MYSCHEDULE_DELETE:
    case types.API_V1_MYSCHEDULE_DELETE_SUCCEEDED:
    case types.API_V1_MYSCHEDULE_DELETE_FAILED:
    case types.API_V1_PRESENTER_LIST:
    case types.API_V1_PRESENTER_LIST_SUCCEEDED:
    case types.API_V1_PRESENTER_LIST_FAILED:
    case types.API_V1_PRESENTER_CREATE:
    case types.API_V1_PRESENTER_CREATE_SUCCEEDED:
    case types.API_V1_PRESENTER_CREATE_FAILED:
    case types.API_V1_PRESENTER_READ:
    case types.API_V1_PRESENTER_READ_SUCCEEDED:
    case types.API_V1_PRESENTER_READ_FAILED:
    case types.API_V1_PRESENTER_UPDATE:
    case types.API_V1_PRESENTER_UPDATE_SUCCEEDED:
    case types.API_V1_PRESENTER_UPDATE_FAILED:
    case types.API_V1_PRESENTER_PARTIAL_UPDATE:
    case types.API_V1_PRESENTER_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PRESENTER_PARTIAL_UPDATE_FAILED:
    case types.API_V1_PRESENTER_DELETE:
    case types.API_V1_PRESENTER_DELETE_SUCCEEDED:
    case types.API_V1_PRESENTER_DELETE_FAILED:
    case types.API_V1_SCHEDULE_LIST:
    case types.API_V1_SCHEDULE_LIST_SUCCEEDED:
    case types.API_V1_SCHEDULE_LIST_FAILED:
    case types.API_V1_SCHEDULE_CREATE:
    case types.API_V1_SCHEDULE_CREATE_SUCCEEDED:
    case types.API_V1_SCHEDULE_CREATE_FAILED:
    case types.API_V1_SCHEDULE_READ:
    case types.API_V1_SCHEDULE_READ_SUCCEEDED:
    case types.API_V1_SCHEDULE_READ_FAILED:
    case types.API_V1_SCHEDULE_UPDATE:
    case types.API_V1_SCHEDULE_UPDATE_SUCCEEDED:
    case types.API_V1_SCHEDULE_UPDATE_FAILED:
    case types.API_V1_SCHEDULE_PARTIAL_UPDATE:
    case types.API_V1_SCHEDULE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SCHEDULE_PARTIAL_UPDATE_FAILED:
    case types.API_V1_SCHEDULE_DELETE:
    case types.API_V1_SCHEDULE_DELETE_SUCCEEDED:
    case types.API_V1_SCHEDULE_DELETE_FAILED:
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
    case types.API_V1_SPONSOR_LIST:
    case types.API_V1_SPONSOR_LIST_SUCCEEDED:
    case types.API_V1_SPONSOR_LIST_FAILED:
    case types.API_V1_SPONSOR_CREATE:
    case types.API_V1_SPONSOR_CREATE_SUCCEEDED:
    case types.API_V1_SPONSOR_CREATE_FAILED:
    case types.API_V1_SPONSOR_READ:
    case types.API_V1_SPONSOR_READ_SUCCEEDED:
    case types.API_V1_SPONSOR_READ_FAILED:
    case types.API_V1_SPONSOR_UPDATE:
    case types.API_V1_SPONSOR_UPDATE_SUCCEEDED:
    case types.API_V1_SPONSOR_UPDATE_FAILED:
    case types.API_V1_SPONSOR_PARTIAL_UPDATE:
    case types.API_V1_SPONSOR_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SPONSOR_PARTIAL_UPDATE_FAILED:
    case types.API_V1_SPONSOR_DELETE:
    case types.API_V1_SPONSOR_DELETE_SUCCEEDED:
    case types.API_V1_SPONSOR_DELETE_FAILED:
    case types.API_V1_VENDOR_LIST:
    case types.API_V1_VENDOR_LIST_SUCCEEDED:
    case types.API_V1_VENDOR_LIST_FAILED:
    case types.API_V1_VENDOR_CREATE:
    case types.API_V1_VENDOR_CREATE_SUCCEEDED:
    case types.API_V1_VENDOR_CREATE_FAILED:
    case types.API_V1_VENDOR_READ:
    case types.API_V1_VENDOR_READ_SUCCEEDED:
    case types.API_V1_VENDOR_READ_FAILED:
    case types.API_V1_VENDOR_UPDATE:
    case types.API_V1_VENDOR_UPDATE_SUCCEEDED:
    case types.API_V1_VENDOR_UPDATE_FAILED:
    case types.API_V1_VENDOR_PARTIAL_UPDATE:
    case types.API_V1_VENDOR_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_VENDOR_PARTIAL_UPDATE_FAILED:
    case types.API_V1_VENDOR_DELETE:
    case types.API_V1_VENDOR_DELETE_SUCCEEDED:
    case types.API_V1_VENDOR_DELETE_FAILED:
    case types.API_V1_VENDORDETAIL_LIST:
    case types.API_V1_VENDORDETAIL_LIST_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_LIST_FAILED:
    case types.API_V1_VENDORDETAIL_CREATE:
    case types.API_V1_VENDORDETAIL_CREATE_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_CREATE_FAILED:
    case types.API_V1_VENDORDETAIL_READ:
    case types.API_V1_VENDORDETAIL_READ_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_READ_FAILED:
    case types.API_V1_VENDORDETAIL_UPDATE:
    case types.API_V1_VENDORDETAIL_UPDATE_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_UPDATE_FAILED:
    case types.API_V1_VENDORDETAIL_PARTIAL_UPDATE:
    case types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_FAILED:
    case types.API_V1_VENDORDETAIL_DELETE:
    case types.API_V1_VENDORDETAIL_DELETE_SUCCEEDED:
    case types.API_V1_VENDORDETAIL_DELETE_FAILED:
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
    default:
      return state
  }
}
