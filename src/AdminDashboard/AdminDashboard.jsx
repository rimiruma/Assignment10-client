import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHome, FaCheckCircle } from "react-icons/fa";

const AdminDashboard = () => {
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/admin/stats")
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div className="card">
                    <FaUsers />
                    <p>Total Users</p>
                    <h3>{stats.totalUsers}</h3>
                </motion.div>

                <motion.div className="card">
                    <FaHome />
                    <p>Total Properties</p>
                    <h3>{stats.totalProperties}</h3>
                </motion.div>

                <motion.div className="card">
                    <FaCheckCircle />
                    <p>Approved</p>
                    <h3>{stats.approvedProperties}</h3>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
