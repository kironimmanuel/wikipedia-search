export interface IArticle {
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
}

export interface IForm {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}
