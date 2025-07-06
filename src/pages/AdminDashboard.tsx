
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminAppointments from "@/components/AdminAppointments";
import AdminPricing from "@/components/AdminPricing";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-900">
              Al Fareej Laundry Admin Dashboard
            </h1>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "appointments"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Appointments
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "pricing"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Pricing Plans
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === "appointments" && <AdminAppointments />}
          {activeTab === "pricing" && <AdminPricing />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
