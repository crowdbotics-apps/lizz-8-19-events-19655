import * as types from "./constants"
export const api_v1_category_list = () => ({ type: types.API_V1_CATEGORY_LIST })
export const api_v1_category_listSucceeded = response => ({
  type: types.API_V1_CATEGORY_LIST_SUCCEEDED,
  response
})

export const api_v1_category_listFailed = error => ({
  type: types.API_V1_CATEGORY_LIST_FAILED,
  error
})

export const api_v1_category_create = () => ({
  type: types.API_V1_CATEGORY_CREATE
})

export const api_v1_category_createSucceeded = response => ({
  type: types.API_V1_CATEGORY_CREATE_SUCCEEDED,
  response
})

export const api_v1_category_createFailed = error => ({
  type: types.API_V1_CATEGORY_CREATE_FAILED,
  error
})

export const api_v1_category_read = () => ({ type: types.API_V1_CATEGORY_READ })
export const api_v1_category_readSucceeded = response => ({
  type: types.API_V1_CATEGORY_READ_SUCCEEDED,
  response
})

export const api_v1_category_readFailed = error => ({
  type: types.API_V1_CATEGORY_READ_FAILED,
  error
})

export const api_v1_category_update = () => ({
  type: types.API_V1_CATEGORY_UPDATE
})

export const api_v1_category_updateSucceeded = response => ({
  type: types.API_V1_CATEGORY_UPDATE_SUCCEEDED,
  response
})

export const api_v1_category_updateFailed = error => ({
  type: types.API_V1_CATEGORY_UPDATE_FAILED,
  error
})

export const api_v1_category_partial_update = () => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE
})

export const api_v1_category_partial_updateSucceeded = response => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_category_partial_updateFailed = error => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_category_delete = () => ({
  type: types.API_V1_CATEGORY_DELETE
})

export const api_v1_category_deleteSucceeded = response => ({
  type: types.API_V1_CATEGORY_DELETE_SUCCEEDED,
  response
})

export const api_v1_category_deleteFailed = error => ({
  type: types.API_V1_CATEGORY_DELETE_FAILED,
  error
})

export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response
})

export const api_v1_customtext_listFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response
})

export const api_v1_customtext_readFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error
})

export const api_v1_customtext_update = () => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE
})

export const api_v1_customtext_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response
})

export const api_v1_customtext_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error
})

export const api_v1_customtext_partial_update = () => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE
})

export const api_v1_customtext_partial_updateSucceeded = response => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_customtext_partial_updateFailed = error => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_faq_list = () => ({ type: types.API_V1_FAQ_LIST })
export const api_v1_faq_listSucceeded = response => ({
  type: types.API_V1_FAQ_LIST_SUCCEEDED,
  response
})

export const api_v1_faq_listFailed = error => ({
  type: types.API_V1_FAQ_LIST_FAILED,
  error
})

export const api_v1_faq_create = () => ({ type: types.API_V1_FAQ_CREATE })
export const api_v1_faq_createSucceeded = response => ({
  type: types.API_V1_FAQ_CREATE_SUCCEEDED,
  response
})

export const api_v1_faq_createFailed = error => ({
  type: types.API_V1_FAQ_CREATE_FAILED,
  error
})

export const api_v1_faq_read = () => ({ type: types.API_V1_FAQ_READ })
export const api_v1_faq_readSucceeded = response => ({
  type: types.API_V1_FAQ_READ_SUCCEEDED,
  response
})

export const api_v1_faq_readFailed = error => ({
  type: types.API_V1_FAQ_READ_FAILED,
  error
})

export const api_v1_faq_update = () => ({ type: types.API_V1_FAQ_UPDATE })
export const api_v1_faq_updateSucceeded = response => ({
  type: types.API_V1_FAQ_UPDATE_SUCCEEDED,
  response
})

export const api_v1_faq_updateFailed = error => ({
  type: types.API_V1_FAQ_UPDATE_FAILED,
  error
})

export const api_v1_faq_partial_update = () => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE
})

export const api_v1_faq_partial_updateSucceeded = response => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_faq_partial_updateFailed = error => ({
  type: types.API_V1_FAQ_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_faq_delete = () => ({ type: types.API_V1_FAQ_DELETE })
export const api_v1_faq_deleteSucceeded = response => ({
  type: types.API_V1_FAQ_DELETE_SUCCEEDED,
  response
})

export const api_v1_faq_deleteFailed = error => ({
  type: types.API_V1_FAQ_DELETE_FAILED,
  error
})

export const api_v1_favorites_list = () => ({
  type: types.API_V1_FAVORITES_LIST
})

export const api_v1_favorites_listSucceeded = response => ({
  type: types.API_V1_FAVORITES_LIST_SUCCEEDED,
  response
})

export const api_v1_favorites_listFailed = error => ({
  type: types.API_V1_FAVORITES_LIST_FAILED,
  error
})

export const api_v1_favorites_create = () => ({
  type: types.API_V1_FAVORITES_CREATE
})

export const api_v1_favorites_createSucceeded = response => ({
  type: types.API_V1_FAVORITES_CREATE_SUCCEEDED,
  response
})

export const api_v1_favorites_createFailed = error => ({
  type: types.API_V1_FAVORITES_CREATE_FAILED,
  error
})

export const api_v1_favorites_read = () => ({
  type: types.API_V1_FAVORITES_READ
})

export const api_v1_favorites_readSucceeded = response => ({
  type: types.API_V1_FAVORITES_READ_SUCCEEDED,
  response
})

export const api_v1_favorites_readFailed = error => ({
  type: types.API_V1_FAVORITES_READ_FAILED,
  error
})

export const api_v1_favorites_update = () => ({
  type: types.API_V1_FAVORITES_UPDATE
})

export const api_v1_favorites_updateSucceeded = response => ({
  type: types.API_V1_FAVORITES_UPDATE_SUCCEEDED,
  response
})

export const api_v1_favorites_updateFailed = error => ({
  type: types.API_V1_FAVORITES_UPDATE_FAILED,
  error
})

export const api_v1_favorites_partial_update = () => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE
})

export const api_v1_favorites_partial_updateSucceeded = response => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_favorites_partial_updateFailed = error => ({
  type: types.API_V1_FAVORITES_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_favorites_delete = () => ({
  type: types.API_V1_FAVORITES_DELETE
})

export const api_v1_favorites_deleteSucceeded = response => ({
  type: types.API_V1_FAVORITES_DELETE_SUCCEEDED,
  response
})

export const api_v1_favorites_deleteFailed = error => ({
  type: types.API_V1_FAVORITES_DELETE_FAILED,
  error
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response
})

export const api_v1_homepage_listFailed = error => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response
})

export const api_v1_homepage_readFailed = error => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error
})

export const api_v1_homepage_update = () => ({
  type: types.API_V1_HOMEPAGE_UPDATE
})

export const api_v1_homepage_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_homepage_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error
})

export const api_v1_homepage_partial_update = () => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE
})

export const api_v1_homepage_partial_updateSucceeded = response => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_homepage_partial_updateFailed = error => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_location_list = () => ({ type: types.API_V1_LOCATION_LIST })
export const api_v1_location_listSucceeded = response => ({
  type: types.API_V1_LOCATION_LIST_SUCCEEDED,
  response
})

export const api_v1_location_listFailed = error => ({
  type: types.API_V1_LOCATION_LIST_FAILED,
  error
})

export const api_v1_location_create = () => ({
  type: types.API_V1_LOCATION_CREATE
})

export const api_v1_location_createSucceeded = response => ({
  type: types.API_V1_LOCATION_CREATE_SUCCEEDED,
  response
})

export const api_v1_location_createFailed = error => ({
  type: types.API_V1_LOCATION_CREATE_FAILED,
  error
})

export const api_v1_location_read = () => ({ type: types.API_V1_LOCATION_READ })
export const api_v1_location_readSucceeded = response => ({
  type: types.API_V1_LOCATION_READ_SUCCEEDED,
  response
})

export const api_v1_location_readFailed = error => ({
  type: types.API_V1_LOCATION_READ_FAILED,
  error
})

export const api_v1_location_update = () => ({
  type: types.API_V1_LOCATION_UPDATE
})

export const api_v1_location_updateSucceeded = response => ({
  type: types.API_V1_LOCATION_UPDATE_SUCCEEDED,
  response
})

export const api_v1_location_updateFailed = error => ({
  type: types.API_V1_LOCATION_UPDATE_FAILED,
  error
})

export const api_v1_location_partial_update = () => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE
})

export const api_v1_location_partial_updateSucceeded = response => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_location_partial_updateFailed = error => ({
  type: types.API_V1_LOCATION_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_location_delete = () => ({
  type: types.API_V1_LOCATION_DELETE
})

export const api_v1_location_deleteSucceeded = response => ({
  type: types.API_V1_LOCATION_DELETE_SUCCEEDED,
  response
})

export const api_v1_location_deleteFailed = error => ({
  type: types.API_V1_LOCATION_DELETE_FAILED,
  error
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = response => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response
})

export const api_v1_login_createFailed = error => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error
})

export const api_v1_myschedule_list = () => ({
  type: types.API_V1_MYSCHEDULE_LIST
})

export const api_v1_myschedule_listSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_LIST_SUCCEEDED,
  response
})

export const api_v1_myschedule_listFailed = error => ({
  type: types.API_V1_MYSCHEDULE_LIST_FAILED,
  error
})

export const api_v1_myschedule_create = () => ({
  type: types.API_V1_MYSCHEDULE_CREATE
})

export const api_v1_myschedule_createSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_CREATE_SUCCEEDED,
  response
})

export const api_v1_myschedule_createFailed = error => ({
  type: types.API_V1_MYSCHEDULE_CREATE_FAILED,
  error
})

export const api_v1_myschedule_read = () => ({
  type: types.API_V1_MYSCHEDULE_READ
})

export const api_v1_myschedule_readSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_READ_SUCCEEDED,
  response
})

export const api_v1_myschedule_readFailed = error => ({
  type: types.API_V1_MYSCHEDULE_READ_FAILED,
  error
})

export const api_v1_myschedule_update = () => ({
  type: types.API_V1_MYSCHEDULE_UPDATE
})

export const api_v1_myschedule_updateSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_myschedule_updateFailed = error => ({
  type: types.API_V1_MYSCHEDULE_UPDATE_FAILED,
  error
})

export const api_v1_myschedule_partial_update = () => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE
})

export const api_v1_myschedule_partial_updateSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_myschedule_partial_updateFailed = error => ({
  type: types.API_V1_MYSCHEDULE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_myschedule_delete = () => ({
  type: types.API_V1_MYSCHEDULE_DELETE
})

export const api_v1_myschedule_deleteSucceeded = response => ({
  type: types.API_V1_MYSCHEDULE_DELETE_SUCCEEDED,
  response
})

export const api_v1_myschedule_deleteFailed = error => ({
  type: types.API_V1_MYSCHEDULE_DELETE_FAILED,
  error
})

export const api_v1_presenter_list = () => ({
  type: types.API_V1_PRESENTER_LIST
})

export const api_v1_presenter_listSucceeded = response => ({
  type: types.API_V1_PRESENTER_LIST_SUCCEEDED,
  response
})

export const api_v1_presenter_listFailed = error => ({
  type: types.API_V1_PRESENTER_LIST_FAILED,
  error
})

export const api_v1_presenter_create = () => ({
  type: types.API_V1_PRESENTER_CREATE
})

export const api_v1_presenter_createSucceeded = response => ({
  type: types.API_V1_PRESENTER_CREATE_SUCCEEDED,
  response
})

export const api_v1_presenter_createFailed = error => ({
  type: types.API_V1_PRESENTER_CREATE_FAILED,
  error
})

export const api_v1_presenter_read = () => ({
  type: types.API_V1_PRESENTER_READ
})

export const api_v1_presenter_readSucceeded = response => ({
  type: types.API_V1_PRESENTER_READ_SUCCEEDED,
  response
})

export const api_v1_presenter_readFailed = error => ({
  type: types.API_V1_PRESENTER_READ_FAILED,
  error
})

export const api_v1_presenter_update = () => ({
  type: types.API_V1_PRESENTER_UPDATE
})

export const api_v1_presenter_updateSucceeded = response => ({
  type: types.API_V1_PRESENTER_UPDATE_SUCCEEDED,
  response
})

export const api_v1_presenter_updateFailed = error => ({
  type: types.API_V1_PRESENTER_UPDATE_FAILED,
  error
})

export const api_v1_presenter_partial_update = () => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE
})

export const api_v1_presenter_partial_updateSucceeded = response => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_presenter_partial_updateFailed = error => ({
  type: types.API_V1_PRESENTER_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_presenter_delete = () => ({
  type: types.API_V1_PRESENTER_DELETE
})

export const api_v1_presenter_deleteSucceeded = response => ({
  type: types.API_V1_PRESENTER_DELETE_SUCCEEDED,
  response
})

export const api_v1_presenter_deleteFailed = error => ({
  type: types.API_V1_PRESENTER_DELETE_FAILED,
  error
})

export const api_v1_schedule_list = () => ({ type: types.API_V1_SCHEDULE_LIST })
export const api_v1_schedule_listSucceeded = response => ({
  type: types.API_V1_SCHEDULE_LIST_SUCCEEDED,
  response
})

export const api_v1_schedule_listFailed = error => ({
  type: types.API_V1_SCHEDULE_LIST_FAILED,
  error
})

export const api_v1_schedule_create = () => ({
  type: types.API_V1_SCHEDULE_CREATE
})

export const api_v1_schedule_createSucceeded = response => ({
  type: types.API_V1_SCHEDULE_CREATE_SUCCEEDED,
  response
})

export const api_v1_schedule_createFailed = error => ({
  type: types.API_V1_SCHEDULE_CREATE_FAILED,
  error
})

export const api_v1_schedule_read = () => ({ type: types.API_V1_SCHEDULE_READ })
export const api_v1_schedule_readSucceeded = response => ({
  type: types.API_V1_SCHEDULE_READ_SUCCEEDED,
  response
})

export const api_v1_schedule_readFailed = error => ({
  type: types.API_V1_SCHEDULE_READ_FAILED,
  error
})

export const api_v1_schedule_update = () => ({
  type: types.API_V1_SCHEDULE_UPDATE
})

export const api_v1_schedule_updateSucceeded = response => ({
  type: types.API_V1_SCHEDULE_UPDATE_SUCCEEDED,
  response
})

export const api_v1_schedule_updateFailed = error => ({
  type: types.API_V1_SCHEDULE_UPDATE_FAILED,
  error
})

export const api_v1_schedule_partial_update = () => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE
})

export const api_v1_schedule_partial_updateSucceeded = response => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_schedule_partial_updateFailed = error => ({
  type: types.API_V1_SCHEDULE_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_schedule_delete = () => ({
  type: types.API_V1_SCHEDULE_DELETE
})

export const api_v1_schedule_deleteSucceeded = response => ({
  type: types.API_V1_SCHEDULE_DELETE_SUCCEEDED,
  response
})

export const api_v1_schedule_deleteFailed = error => ({
  type: types.API_V1_SCHEDULE_DELETE_FAILED,
  error
})

export const api_v1_signup_create = () => ({ type: types.API_V1_SIGNUP_CREATE })
export const api_v1_signup_createSucceeded = response => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response
})

export const api_v1_signup_createFailed = error => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error
})

export const api_v1_sponsor_list = () => ({ type: types.API_V1_SPONSOR_LIST })
export const api_v1_sponsor_listSucceeded = response => ({
  type: types.API_V1_SPONSOR_LIST_SUCCEEDED,
  response
})

export const api_v1_sponsor_listFailed = error => ({
  type: types.API_V1_SPONSOR_LIST_FAILED,
  error
})

export const api_v1_sponsor_create = () => ({
  type: types.API_V1_SPONSOR_CREATE
})

export const api_v1_sponsor_createSucceeded = response => ({
  type: types.API_V1_SPONSOR_CREATE_SUCCEEDED,
  response
})

export const api_v1_sponsor_createFailed = error => ({
  type: types.API_V1_SPONSOR_CREATE_FAILED,
  error
})

export const api_v1_sponsor_read = () => ({ type: types.API_V1_SPONSOR_READ })
export const api_v1_sponsor_readSucceeded = response => ({
  type: types.API_V1_SPONSOR_READ_SUCCEEDED,
  response
})

export const api_v1_sponsor_readFailed = error => ({
  type: types.API_V1_SPONSOR_READ_FAILED,
  error
})

export const api_v1_sponsor_update = () => ({
  type: types.API_V1_SPONSOR_UPDATE
})

export const api_v1_sponsor_updateSucceeded = response => ({
  type: types.API_V1_SPONSOR_UPDATE_SUCCEEDED,
  response
})

export const api_v1_sponsor_updateFailed = error => ({
  type: types.API_V1_SPONSOR_UPDATE_FAILED,
  error
})

export const api_v1_sponsor_partial_update = () => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE
})

export const api_v1_sponsor_partial_updateSucceeded = response => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_sponsor_partial_updateFailed = error => ({
  type: types.API_V1_SPONSOR_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_sponsor_delete = () => ({
  type: types.API_V1_SPONSOR_DELETE
})

export const api_v1_sponsor_deleteSucceeded = response => ({
  type: types.API_V1_SPONSOR_DELETE_SUCCEEDED,
  response
})

export const api_v1_sponsor_deleteFailed = error => ({
  type: types.API_V1_SPONSOR_DELETE_FAILED,
  error
})

export const api_v1_vendor_list = () => ({ type: types.API_V1_VENDOR_LIST })
export const api_v1_vendor_listSucceeded = response => ({
  type: types.API_V1_VENDOR_LIST_SUCCEEDED,
  response
})

export const api_v1_vendor_listFailed = error => ({
  type: types.API_V1_VENDOR_LIST_FAILED,
  error
})

export const api_v1_vendor_create = () => ({ type: types.API_V1_VENDOR_CREATE })
export const api_v1_vendor_createSucceeded = response => ({
  type: types.API_V1_VENDOR_CREATE_SUCCEEDED,
  response
})

export const api_v1_vendor_createFailed = error => ({
  type: types.API_V1_VENDOR_CREATE_FAILED,
  error
})

export const api_v1_vendor_read = () => ({ type: types.API_V1_VENDOR_READ })
export const api_v1_vendor_readSucceeded = response => ({
  type: types.API_V1_VENDOR_READ_SUCCEEDED,
  response
})

export const api_v1_vendor_readFailed = error => ({
  type: types.API_V1_VENDOR_READ_FAILED,
  error
})

export const api_v1_vendor_update = () => ({ type: types.API_V1_VENDOR_UPDATE })
export const api_v1_vendor_updateSucceeded = response => ({
  type: types.API_V1_VENDOR_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vendor_updateFailed = error => ({
  type: types.API_V1_VENDOR_UPDATE_FAILED,
  error
})

export const api_v1_vendor_partial_update = () => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE
})

export const api_v1_vendor_partial_updateSucceeded = response => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vendor_partial_updateFailed = error => ({
  type: types.API_V1_VENDOR_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_vendor_delete = () => ({ type: types.API_V1_VENDOR_DELETE })
export const api_v1_vendor_deleteSucceeded = response => ({
  type: types.API_V1_VENDOR_DELETE_SUCCEEDED,
  response
})

export const api_v1_vendor_deleteFailed = error => ({
  type: types.API_V1_VENDOR_DELETE_FAILED,
  error
})

export const api_v1_vendordetail_list = () => ({
  type: types.API_V1_VENDORDETAIL_LIST
})

export const api_v1_vendordetail_listSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_LIST_SUCCEEDED,
  response
})

export const api_v1_vendordetail_listFailed = error => ({
  type: types.API_V1_VENDORDETAIL_LIST_FAILED,
  error
})

export const api_v1_vendordetail_create = () => ({
  type: types.API_V1_VENDORDETAIL_CREATE
})

export const api_v1_vendordetail_createSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_CREATE_SUCCEEDED,
  response
})

export const api_v1_vendordetail_createFailed = error => ({
  type: types.API_V1_VENDORDETAIL_CREATE_FAILED,
  error
})

export const api_v1_vendordetail_read = () => ({
  type: types.API_V1_VENDORDETAIL_READ
})

export const api_v1_vendordetail_readSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_READ_SUCCEEDED,
  response
})

export const api_v1_vendordetail_readFailed = error => ({
  type: types.API_V1_VENDORDETAIL_READ_FAILED,
  error
})

export const api_v1_vendordetail_update = () => ({
  type: types.API_V1_VENDORDETAIL_UPDATE
})

export const api_v1_vendordetail_updateSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vendordetail_updateFailed = error => ({
  type: types.API_V1_VENDORDETAIL_UPDATE_FAILED,
  error
})

export const api_v1_vendordetail_partial_update = () => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE
})

export const api_v1_vendordetail_partial_updateSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const api_v1_vendordetail_partial_updateFailed = error => ({
  type: types.API_V1_VENDORDETAIL_PARTIAL_UPDATE_FAILED,
  error
})

export const api_v1_vendordetail_delete = () => ({
  type: types.API_V1_VENDORDETAIL_DELETE
})

export const api_v1_vendordetail_deleteSucceeded = response => ({
  type: types.API_V1_VENDORDETAIL_DELETE_SUCCEEDED,
  response
})

export const api_v1_vendordetail_deleteFailed = error => ({
  type: types.API_V1_VENDORDETAIL_DELETE_FAILED,
  error
})

export const rest_auth_login_create = () => ({
  type: types.REST_AUTH_LOGIN_CREATE
})

export const rest_auth_login_createSucceeded = response => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response
})

export const rest_auth_login_createFailed = error => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response
})

export const rest_auth_logout_listFailed = error => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = response => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response
})

export const rest_auth_logout_createFailed = error => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error
})

export const rest_auth_password_change_create = () => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE
})

export const rest_auth_password_change_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_change_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error
})

export const rest_auth_password_reset_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE
})

export const rest_auth_password_reset_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_reset_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error
})

export const rest_auth_password_reset_confirm_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE
})

export const rest_auth_password_reset_confirm_createSucceeded = response => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response
})

export const rest_auth_password_reset_confirm_createFailed = error => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error
})

export const rest_auth_registration_create = () => ({
  type: types.REST_AUTH_REGISTRATION_CREATE
})

export const rest_auth_registration_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response
})

export const rest_auth_registration_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error
})

export const rest_auth_registration_verify_email_create = () => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE
})

export const rest_auth_registration_verify_email_createSucceeded = response => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response
})

export const rest_auth_registration_verify_email_createFailed = error => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = response => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response
})

export const rest_auth_user_readFailed = error => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error
})

export const rest_auth_user_update = () => ({
  type: types.REST_AUTH_USER_UPDATE
})

export const rest_auth_user_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response
})

export const rest_auth_user_updateFailed = error => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error
})

export const rest_auth_user_partial_update = () => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE
})

export const rest_auth_user_partial_updateSucceeded = response => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response
})

export const rest_auth_user_partial_updateFailed = error => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error
})
