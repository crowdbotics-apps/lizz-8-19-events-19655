import axios from "axios"
const lizz819eventsAPI = axios.create({
  baseURL: "https://lizz-8-19-events-19655-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_category_list() {
  return lizz819eventsAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/category/`, requestBody)
}
function api_v1_category_read() {
  return lizz819eventsAPI.get(`/api/v1/category/{id}/`)
}
function api_v1_category_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/category/{id}/`, requestBody)
}
function api_v1_category_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/category/{id}/`, requestBody)
}
function api_v1_category_delete() {
  return lizz819eventsAPI.delete(`/api/v1/category/{id}/`)
}
function api_v1_customtext_list() {
  return lizz819eventsAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return lizz819eventsAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_faq_list() {
  return lizz819eventsAPI.get(`/api/v1/faq/`)
}
function api_v1_faq_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/faq/`, requestBody)
}
function api_v1_faq_read() {
  return lizz819eventsAPI.get(`/api/v1/faq/{id}/`)
}
function api_v1_faq_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/faq/{id}/`, requestBody)
}
function api_v1_faq_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/faq/{id}/`, requestBody)
}
function api_v1_faq_delete() {
  return lizz819eventsAPI.delete(`/api/v1/faq/{id}/`)
}
function api_v1_favorites_list() {
  return lizz819eventsAPI.get(`/api/v1/favorites/`)
}
function api_v1_favorites_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/favorites/`, requestBody)
}
function api_v1_favorites_read() {
  return lizz819eventsAPI.get(`/api/v1/favorites/{id}/`)
}
function api_v1_favorites_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/favorites/{id}/`, requestBody)
}
function api_v1_favorites_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/favorites/{id}/`, requestBody)
}
function api_v1_favorites_delete() {
  return lizz819eventsAPI.delete(`/api/v1/favorites/{id}/`)
}
function api_v1_homepage_list() {
  return lizz819eventsAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return lizz819eventsAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_location_list() {
  return lizz819eventsAPI.get(`/api/v1/location/`)
}
function api_v1_location_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/location/`, requestBody)
}
function api_v1_location_read() {
  return lizz819eventsAPI.get(`/api/v1/location/{id}/`)
}
function api_v1_location_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/location/{id}/`, requestBody)
}
function api_v1_location_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/location/{id}/`, requestBody)
}
function api_v1_location_delete() {
  return lizz819eventsAPI.delete(`/api/v1/location/{id}/`)
}
function api_v1_login_create() {
  return lizz819eventsAPI.post(`/api/v1/login/`)
}
function api_v1_myschedule_list() {
  return lizz819eventsAPI.get(`/api/v1/myschedule/`)
}
function api_v1_myschedule_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/myschedule/`, requestBody)
}
function api_v1_myschedule_read() {
  return lizz819eventsAPI.get(`/api/v1/myschedule/{id}/`)
}
function api_v1_myschedule_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/myschedule/{id}/`, requestBody)
}
function api_v1_myschedule_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/myschedule/{id}/`, requestBody)
}
function api_v1_myschedule_delete() {
  return lizz819eventsAPI.delete(`/api/v1/myschedule/{id}/`)
}
function api_v1_presenter_list() {
  return lizz819eventsAPI.get(`/api/v1/presenter/`)
}
function api_v1_presenter_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/presenter/`, requestBody)
}
function api_v1_presenter_read() {
  return lizz819eventsAPI.get(`/api/v1/presenter/{id}/`)
}
function api_v1_presenter_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/presenter/{id}/`, requestBody)
}
function api_v1_presenter_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/presenter/{id}/`, requestBody)
}
function api_v1_presenter_delete() {
  return lizz819eventsAPI.delete(`/api/v1/presenter/{id}/`)
}
function api_v1_schedule_list() {
  return lizz819eventsAPI.get(`/api/v1/schedule/`)
}
function api_v1_schedule_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/schedule/`, requestBody)
}
function api_v1_schedule_read() {
  return lizz819eventsAPI.get(`/api/v1/schedule/{id}/`)
}
function api_v1_schedule_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/schedule/{id}/`, requestBody)
}
function api_v1_schedule_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/schedule/{id}/`, requestBody)
}
function api_v1_schedule_delete() {
  return lizz819eventsAPI.delete(`/api/v1/schedule/{id}/`)
}
function api_v1_signup_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/signup/`, requestBody)
}
function api_v1_sponsor_list() {
  return lizz819eventsAPI.get(`/api/v1/sponsor/`)
}
function api_v1_sponsor_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/sponsor/`, requestBody)
}
function api_v1_sponsor_read() {
  return lizz819eventsAPI.get(`/api/v1/sponsor/{id}/`)
}
function api_v1_sponsor_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/sponsor/{id}/`, requestBody)
}
function api_v1_sponsor_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/sponsor/{id}/`, requestBody)
}
function api_v1_sponsor_delete() {
  return lizz819eventsAPI.delete(`/api/v1/sponsor/{id}/`)
}
function api_v1_vendor_list() {
  return lizz819eventsAPI.get(`/api/v1/vendor/`)
}
function api_v1_vendor_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/vendor/`, requestBody)
}
function api_v1_vendor_read() {
  return lizz819eventsAPI.get(`/api/v1/vendor/{id}/`)
}
function api_v1_vendor_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/vendor/{id}/`, requestBody)
}
function api_v1_vendor_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/vendor/{id}/`, requestBody)
}
function api_v1_vendor_delete() {
  return lizz819eventsAPI.delete(`/api/v1/vendor/{id}/`)
}
function api_v1_vendordetail_list() {
  return lizz819eventsAPI.get(`/api/v1/vendordetail/`)
}
function api_v1_vendordetail_create(requestBody) {
  return lizz819eventsAPI.post(`/api/v1/vendordetail/`, requestBody)
}
function api_v1_vendordetail_read() {
  return lizz819eventsAPI.get(`/api/v1/vendordetail/{id}/`)
}
function api_v1_vendordetail_update(requestBody) {
  return lizz819eventsAPI.put(`/api/v1/vendordetail/{id}/`, requestBody)
}
function api_v1_vendordetail_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/api/v1/vendordetail/{id}/`, requestBody)
}
function api_v1_vendordetail_delete() {
  return lizz819eventsAPI.delete(`/api/v1/vendordetail/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return lizz819eventsAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return lizz819eventsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return lizz819eventsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return lizz819eventsAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return lizz819eventsAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return lizz819eventsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return lizz819eventsAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return lizz819eventsAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return lizz819eventsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return lizz819eventsAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return lizz819eventsAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_faq_list,
  api_v1_faq_create,
  api_v1_faq_read,
  api_v1_faq_update,
  api_v1_faq_partial_update,
  api_v1_faq_delete,
  api_v1_favorites_list,
  api_v1_favorites_create,
  api_v1_favorites_read,
  api_v1_favorites_update,
  api_v1_favorites_partial_update,
  api_v1_favorites_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_location_list,
  api_v1_location_create,
  api_v1_location_read,
  api_v1_location_update,
  api_v1_location_partial_update,
  api_v1_location_delete,
  api_v1_login_create,
  api_v1_myschedule_list,
  api_v1_myschedule_create,
  api_v1_myschedule_read,
  api_v1_myschedule_update,
  api_v1_myschedule_partial_update,
  api_v1_myschedule_delete,
  api_v1_presenter_list,
  api_v1_presenter_create,
  api_v1_presenter_read,
  api_v1_presenter_update,
  api_v1_presenter_partial_update,
  api_v1_presenter_delete,
  api_v1_schedule_list,
  api_v1_schedule_create,
  api_v1_schedule_read,
  api_v1_schedule_update,
  api_v1_schedule_partial_update,
  api_v1_schedule_delete,
  api_v1_signup_create,
  api_v1_sponsor_list,
  api_v1_sponsor_create,
  api_v1_sponsor_read,
  api_v1_sponsor_update,
  api_v1_sponsor_partial_update,
  api_v1_sponsor_delete,
  api_v1_vendor_list,
  api_v1_vendor_create,
  api_v1_vendor_read,
  api_v1_vendor_update,
  api_v1_vendor_partial_update,
  api_v1_vendor_delete,
  api_v1_vendordetail_list,
  api_v1_vendordetail_create,
  api_v1_vendordetail_read,
  api_v1_vendordetail_update,
  api_v1_vendordetail_partial_update,
  api_v1_vendordetail_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
