import { useState } from "react";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "student2@example.com",
        password: "SecurePassword123",
        first_name: "Max",
        last_name: "Jones",
        date_of_birth: "2000-01-16",
        enrollment_date: "2023-09-01",
        university_id: 1,

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="date"
                        name="enrollment_date"
                        value={formData.enrollment_date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        type="number"
                        name="university_id"
                        placeholder="University ID"
                        value={formData.university_id}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
