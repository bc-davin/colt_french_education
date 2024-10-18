// app/data/actions/auth-actions.ts

'use server';


export async function registerUserAction(prevState: any, formData: FormData) {
    console.log("Hello from Register User Action!");

    const fields = {
        email: formData.get("email"),
        password: formData.get("password"),
        name:   formData.get("name"),
        institution: formData.get("institution"),
      };

      try {
        const response = await fetch('http://localhost:5001/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_mail: fields.email,
                user_password_md5: fields.password,  // TODO Use SHA 256 hashing
                user_name: fields.name,
                user_school: fields.institution,
                is_enabled: true,  // Default values for new users
                is_removed: false, // Default values for new users
            }),

        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        const data = await response.json();

        return {
            ...prevState,
            data,
        };
      } catch (error) {
        let errorMessage = 'An unknown error occurred';
        
        if (error instanceof Error) {
            // TypeScript now knows 'error' is of type 'Error'
            errorMessage = error.message;
        } else {
            // For safety, in case error isn't of type 'Error'
            errorMessage = String(error);
        }

        console.error("Error registering user:", errorMessage);

        return {
            ...prevState,
            error: errorMessage,
        };
      }

      
}