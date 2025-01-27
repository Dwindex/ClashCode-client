import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterModel } from '@/types/modules/Auth';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import { useSignupMutation } from '../../hooks/mutation/useSignupMutation';
import { RegisterUserInput } from '../../types/mutation';

// Lazy load the presentation component
const SignupComponent = React.lazy(() => 
    import('./components/Signup')
);

const SignupContainer: React.FC = () => {
    const navigate = useNavigate();
    const [requestData, setRequestData] = useState<RegisterUserInput>({
        username: null,
        email: null,
        password: null
    });

    const { signUp, loading } = useSignupMutation();

    const handleInputs = (value: string, key: keyof RegisterModel) => {
        setRequestData((prevData) => ({
            ...prevData,
            [key]: value || null,
        }));
    };

    const register = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await signUp(requestData);
            if (response.createUser.token) {
                // Redirect to dashboard or home page after successful signup
                navigate('/dashboard');
            }
        } catch (e) {
            console.error('Registration error:', e);
            // Here you might want to show an error message to the user
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <SignupComponent 
                onRegister={register}
                onHandleInputs={handleInputs}
            />
        </Suspense>
    );
};

export default React.memo(SignupContainer);