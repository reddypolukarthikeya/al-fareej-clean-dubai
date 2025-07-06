
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  validity: string;
}

// Mock data for pricing plans
const mockPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic Plan",
    price: 89,
    description: "Perfect for individuals\n• Up to 5kg of laundry\n• Wash & fold service\n• Free pickup & delivery",
    validity: "Monthly"
  },
  {
    id: "2",
    name: "Family Plan",
    price: 159,
    description: "Ideal for families\n• Up to 10kg of laundry\n• Wash, fold & iron service\n• Priority scheduling\n• Free pickup & delivery",
    validity: "Monthly"
  },
  {
    id: "3",
    name: "Premium Plan",
    price: 229,
    description: "Complete care package\n• Unlimited laundry\n• All services included\n• Same-day delivery\n• Dedicated support",
    validity: "Monthly"
  }
];

const AdminPricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>(mockPlans);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    validity: "Monthly"
  });

  const resetForm = () => {
    setFormData({ name: "", price: "", description: "", validity: "Monthly" });
    setEditingPlan(null);
  };

  const handleEdit = (plan: PricingPlan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      description: plan.description,
      validity: plan.validity
    });
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.price || !formData.description) return;

    const planData: PricingPlan = {
      id: editingPlan?.id || Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      validity: formData.validity
    };

    if (editingPlan) {
      setPlans(prev => prev.map(p => p.id === editingPlan.id ? planData : p));
    } else {
      setPlans(prev => [...prev, planData]);
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this plan?")) {
      setPlans(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pricing Plans</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingPlan ? "Edit Plan" : "Add New Plan"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Plan Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Basic Plan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price (AED)</label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g., 89"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description/Inclusions</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what's included in this plan..."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Validity Period</label>
                <select
                  value={formData.validity}
                  onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={handleSave} className="flex-1">
                  Save
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <Card key={plan.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.validity}</CardDescription>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(plan)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(plan.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-3">
                {plan.price} AED
              </div>
              <div className="text-sm text-gray-600 whitespace-pre-line">
                {plan.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPricing;
