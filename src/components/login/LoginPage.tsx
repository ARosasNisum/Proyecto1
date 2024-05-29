import {ChangeEvent, FormEvent, useState} from 'react'
import {useAuth} from "../../hooks/useAuth.tsx";

interface FormData {
    username: string
    password: string
    rememberMe: boolean
}

interface FormErrors {
    username?: string
    password?: string
}

const LoginPage = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        rememberMe: false,
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [globalError, setGlobalError] = useState<string>('')
    const auth = useAuth();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    const validate = (): boolean => {
        const formErrors: FormErrors = {}
        let valid = true

        if (!formData.username) {
            valid = false
            formErrors.username = 'Username is required'
        }

        if (!formData.password) {
            valid = false
            formErrors.password = 'Password is required'
        }

        setErrors(formErrors)
        return valid
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (validate()) {
            // Simula la autenticación
            if (auth.login(formData.username, formData.password)) {
                console.log('Login successful')
                console.log(formData)
                // Resetear formulario
                setFormData({
                    username: '',
                    password: '',
                    rememberMe: false,
                })
                setErrors({})
                setGlobalError('')
            } else {
                setGlobalError('Bad credentials')
            }
        }
    }

    return (
        <div>
            <h2>This is the custom login page. You can define whatever you want here.</h2>
            <form id="loginForm" onSubmit={handleSubmit}>
                {globalError && <p style={{color: 'red'}}>{globalError}</p>}
                <div>
                    <label htmlFor="username">User: *</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password: *</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="rememberMe">Remember me:</label>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" id="login">Login</button>
            </form>
        </div>
    )
}

export default LoginPage