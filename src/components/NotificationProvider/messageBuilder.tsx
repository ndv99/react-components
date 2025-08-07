import {
  NotificationAction,
  NotificationType,
  QueuedNotification,
} from "./types";
import React, { ReactNode } from "react";
import { NotificationSeverity } from "../Notifications";

export const queue = (notification: NotificationType): QueuedNotification => {
  return { state: { queuedNotification: notification } };
};

export const info = (message: ReactNode, title?: string): NotificationType => {
  return {
    message,
    title,
    type: NotificationSeverity.INFORMATION,
  };
};

export const success = (
  message: ReactNode,
  title?: string,
): NotificationType => {
  return {
    message,
    title,
    type: NotificationSeverity.POSITIVE,
  };
};

export const failure = (
  title: string,
  error: unknown,
  message?: ReactNode,
  actions?: NotificationAction[],
): NotificationType => {
  return {
    actions,
    message: formatErrorMessage(message, error),
    title,
    type: NotificationSeverity.NEGATIVE,
  };
};

export const formatErrorMessage = (message?: ReactNode, error?: unknown) => {
  if (error && error instanceof Error) {
    return (
      <>
        {message} {error.message}
      </>
    );
  } else {
    return message;
  }
};
