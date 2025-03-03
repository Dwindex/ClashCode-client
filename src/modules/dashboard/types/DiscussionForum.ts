export interface  DiscussionForemDataRequest{
    page:number,
    pageSize:number
}

export interface GetDiscussionForumResponse {
    getMessages: {
      messages: Message[];
      pageNumber: number;
      pageSize: number;
      hasMore: boolean;
      totalResults: number;
    };
  }
  
  export interface Message {
    messageId: string;
    userId: string;
    title: string;
    message: string;
    likes: number;
    time: string;
    user: User;
    replies: Reply[];
  }
  
  export interface Reply {
    replyId: string;
    messageId: string;
    userId: string;
    reply: string;
    likes: number;
    time: string;
    user: User;
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    kyc: boolean;
    image: string;
    rating: number;
    address: string;
    summary: string;
    dob: string;
    gender: string;
    isactive: boolean;
  }
  