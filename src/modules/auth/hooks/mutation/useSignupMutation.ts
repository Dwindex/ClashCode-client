import { useMutation, ApolloError } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations';
import { 
    CreateUserMutationResponse, 
    RegisterUserInput 
} from '../../types/mutation';

interface UseSignupMutationResult {
    signUp: (input: RegisterUserInput) => Promise<CreateUserMutationResponse>;
    loading: boolean;
    error: ApolloError | undefined;
    data: CreateUserMutationResponse | null | undefined;
}

export const useSignupMutation = (): UseSignupMutationResult => {
    const [mutate, { loading, error, data }] = useMutation<
        CreateUserMutationResponse,
        { input: RegisterUserInput }
    >(CREATE_USER);

    const signUp = async (input: RegisterUserInput): Promise<CreateUserMutationResponse> => {
        try {
            const response = await mutate({
                variables: { input }
            });

            if (!response.data) {
                throw new Error('No data returned from mutation');
            }

            // You might want to handle the token here, e.g., store it in localStorage
            // TODO: add to cookies instead
            if (response.data.createUser.token) {
                localStorage.setItem('token', response.data.createUser.token);
            }

            return response.data;
        } catch (err) {
            console.error('Signup mutation error:', err);
            throw err;
        }
    };

    return {
        signUp,
        loading,
        error,
        data
    };
};