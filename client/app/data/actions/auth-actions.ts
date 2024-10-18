'use server';

export async function registerUserAction(prevState: any, formData: FormData) {
    console.log("Hello from Register User Action!");

    const fields = {
        email: formData.get("email"),
        password: formData.get("password"),
        name:   formData.get("name"),
        institution: formData.get("institution"),
      };
    
      return {
        ...prevState,
        data: fields,
      }
}