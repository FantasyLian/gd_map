import http from '@/utils/http'

export const fetchLogin = params => http.$get('web/login', params)

export const fetchUploadGeolocation = params => http.$get('ldc/position/up')
