import { Pipe, PipeTransform } from '@angular/core';
import { IArticleItem } from '../../interfaces/faqbots';

@Pipe({
  name: 'searchArticleByQuestion'
})
export class SearchArticleByQuestionPipe implements PipeTransform {

  transform(value: IArticleItem[], searchString: string): any {
    const articles = value; // JSON.parse(JSON.stringify(value));
    if (!articles) { return; }
    if (!searchString) { return; }
    if (searchString.length < 3) { return; }

    return articles
    .map((article) => {
      return {
        ...article,
        questions: article.questions.filter((question: string) => {
          return question.toLowerCase().includes(searchString.toLowerCase());
        }).map(question => {
            return question.toLowerCase().replace(searchString.toLowerCase(), `<strong>${searchString.toLowerCase()}</strong>`);
        })
      };
    }).filter((article) => {
      return article.questions.length > 0;
    });
  }

}
