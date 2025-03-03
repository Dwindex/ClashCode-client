import { gql } from "@apollo/client"


export const Get_Messages = gql`
query GetMessages($page: Int!, $pageSize: Int!) {
  getMessages(page: $page, pageSize: $pageSize) {
     pageNumber
        pageSize
        hasMore
        totalResults
        messages {
            messageId
            userId
            title
            message
            likes
            time
            user {
                userID
                username
                email
                firstname
                lastname
                kyc
                image
                rating
                address
                summary
                dob
                gender
                isactive
            }
            replies {
                replyId
                messageId
                userId
                reply
                likes
                time
            }
        }
  }
}
`;


