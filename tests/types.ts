// types.ts

import { Type } from 'class-validator';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum ResponseStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  NOT_FOUND = 'NOT_FOUND',
  INVALID_REQUEST = 'INVALID_REQUEST',
}

export enum ResponseDataType {
  JSON = 'application/json',
  XML = 'application/xml',
  TEXT = 'text/plain',
}

export type RequestBody<T> = T;
export type ResponseBody<T> = T;

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface RequestQuery<T> {
  [key: string]: T;
}

export interface RequestOptions {
  url: string;
  method: HttpMethod;
  headers: { [key: string]: string };
  body?: RequestBody<any>;
  query?: RequestQuery<any>;
}

export interface Response {
  status: ResponseStatus;
  data?: ResponseBody<any>;
  error?: string;
  message?: string;
}

export interface ApiError extends Response {
  status: ResponseStatus.INVALID_REQUEST;
  error: string;
  message: string;
  details?: { [key: string]: string };
}