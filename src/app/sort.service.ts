export class SortService {
  static sortMessageList = (obj1, obj2) => {
    return obj2.messageList[obj2.messageList.length - 1].time - obj1.messageList[obj1.messageList.length - 1].time;
  }

  static sortPipeline = (a, b) => {
    if (a.display_values > b.display_values) {
      return 1;
    } else if (a.display_values < b.display_values) {
      return -1;
    } else {
      return 0;
    }
  }

  static sortBots = (bot1, bot2) => {
    if (bot1.store_isPinned && !bot2.store_isPinned) {
      return -1;
    } else if (!bot1.store_isPinned && bot2.store_isPinned) {
      return 1;
    } else {
      return bot1.updated_at > bot2.updated_at ? -1 : 1;
    }
  }

  static sortObj = (key) => {
    return ((v1, v2) => {
      return v2[key] - v1[key];
    });
  }
}
