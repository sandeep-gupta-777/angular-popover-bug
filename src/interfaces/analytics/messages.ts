export interface IAnalyticsMessages {
  'messagesinfo': {
    'bothandled': number,
    'labels': string,
    'nonbothandled': number,
    'total': number
  }[];
  'total': {
  'bothandled': number,
    'nonbothandled': number,
    'total': number
};
}
