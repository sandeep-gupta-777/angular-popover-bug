export interface IAverageRoomTimeItem {
  'averageroomtime'?: number;
  'labels'?: '19/07/2017';
}

export interface ITotalFlowsItem {
  'imichat'?: 0;
  'labels'?: '19/07/2017';
  'nonimichat'?: 0;
  'total'?: 0;
}

export interface ITotalSessions {
  'messagesinfo'?: [

    {
      'bothandled'?: number,
      'labels'?: string,
      'nonbothandled'?: number,
      'total'?: number
    }
    ];
  'total'?: {
    'bothandled'?: number,
    'nonbothandled'?: 0,
    'total'?: number
  };
}
