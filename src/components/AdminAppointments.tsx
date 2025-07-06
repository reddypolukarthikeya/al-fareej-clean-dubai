
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data for appointments
const mockAppointments = [
  {
    id: "ALF001",
    customerName: "Ahmed Al Mansouri",
    mobile: "+971 50 123 4567",
    pickupDate: "2024-01-15",
    pickupTime: "10:00 AM",
    serviceType: "Wash & Fold",
    items: "2 bags",
    status: "New"
  },
  {
    id: "ALF002",
    customerName: "Fatima Hassan",
    mobile: "+971 55 987 6543",
    pickupDate: "2024-01-15",
    pickupTime: "2:00 PM",
    serviceType: "Dry Cleaning",
    items: "3 suits, 2 shirts",
    status: "Picked Up"
  },
  {
    id: "ALF003",
    customerName: "Mohammed Ali",
    mobile: "+971 56 456 7890",
    pickupDate: "2024-01-16",
    pickupTime: "9:00 AM",
    serviceType: "Ironing",
    items: "1 bag",
    status: "Cleaning"
  },
  {
    id: "ALF004",
    customerName: "Sarah Johnson",
    mobile: "+971 50 111 2222",
    pickupDate: "2024-01-16",
    pickupTime: "4:00 PM",
    serviceType: "Carpet Cleaning",
    items: "2 carpets",
    status: "Completed"
  }
];

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const updateStatus = (id: string, newStatus: string) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800";
      case "Scheduled": return "bg-yellow-100 text-yellow-800";
      case "Picked Up": return "bg-purple-100 text-purple-800";
      case "Cleaning": return "bg-orange-100 text-orange-800";
      case "Delivering": return "bg-indigo-100 text-indigo-800";
      case "Completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search by name or order ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Scheduled">Scheduled</SelectItem>
            <SelectItem value="Picked Up">Picked Up</SelectItem>
            <SelectItem value="Cleaning">Cleaning</SelectItem>
            <SelectItem value="Delivering">Delivering</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Appointments Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Pickup Date & Time</TableHead>
              <TableHead>Service Type</TableHead>
              <TableHead>Items/Weight</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.id}</TableCell>
                <TableCell>{appointment.customerName}</TableCell>
                <TableCell>{appointment.mobile}</TableCell>
                <TableCell>
                  {appointment.pickupDate}<br />
                  <span className="text-sm text-gray-500">{appointment.pickupTime}</span>
                </TableCell>
                <TableCell>{appointment.serviceType}</TableCell>
                <TableCell>{appointment.items}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select
                    value={appointment.status}
                    onValueChange={(value) => updateStatus(appointment.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="Picked Up">Picked Up</SelectItem>
                      <SelectItem value="Cleaning">Cleaning</SelectItem>
                      <SelectItem value="Delivering">Delivering</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminAppointments;
