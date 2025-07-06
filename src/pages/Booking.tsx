
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    serviceType: "",
    serviceCategory: "",
    timeSlot: "",
    fullName: "",
    mobile: "+971 50 219 3235",
    email: "",
    address: "",
    area: "",
    instructions: "",
    bags: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    console.log("Booking submitted:", { ...formData, date });
    setStep(6); // Go to confirmation
  };

  return (
    <div className="min-h-screen bg-blue-50/30">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">Schedule Pickup</h1>
          <p className="text-gray-600">Book your laundry service in a few simple steps</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step > stepNum ? <Check size={16} /> : stepNum}
                </div>
                {stepNum < 5 && (
                  <div className={`w-20 h-1 mx-2 ${
                    step > stepNum ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Schedule</span>
            <span>Details</span>
            <span>Review</span>
            <span>Done</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Select Your Service</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="serviceCategory" className="text-base font-semibold text-gray-700">Service Category</Label>
                  <Select value={formData.serviceCategory} onValueChange={(value) => handleInputChange('serviceCategory', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose service category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Service</SelectItem>
                      <SelectItem value="express">Express Service (24hrs)</SelectItem>
                      <SelectItem value="premium">Premium Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="serviceType" className="text-base font-semibold text-gray-700">Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
                      <SelectItem value="wash-fold">Wash & Fold</SelectItem>
                      <SelectItem value="ironing">Ironing</SelectItem>
                      <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                      <SelectItem value="curtain">Curtain Cleaning</SelectItem>
                      <SelectItem value="shoe">Shoe Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={nextStep} 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.serviceCategory || !formData.serviceType}
                >
                  Continue <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Schedule */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Schedule Pickup & Delivery</h2>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold text-gray-700">Pickup Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal mt-2",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="timeSlot" className="text-base font-semibold text-gray-700">Time Slot</Label>
                  <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (2 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (7 PM - 10 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Estimated Timeline:</strong><br />
                    Pickup within 4 hours of selected slot<br />
                    {formData.serviceCategory === 'express' ? 'Delivery: Next Day' : 'Delivery: 24-48 hours'}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="mr-2" size={16} /> Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    disabled={!date || !formData.timeSlot}
                  >
                    Continue <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Information</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-base font-semibold text-gray-700">Full Name</Label>
                  <Input 
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-base font-semibold text-gray-700">Mobile Number</Label>
                  <Input 
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="+971 50 219 3235"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold text-gray-700">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-base font-semibold text-gray-700">Pickup Address</Label>
                  <Textarea 
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your full address"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="area" className="text-base font-semibold text-gray-700">Area in Dubai</Label>
                  <Select value={formData.area} onValueChange={(value) => handleInputChange('area', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marina">Dubai Marina</SelectItem>
                      <SelectItem value="jlt">JLT</SelectItem>
                      <SelectItem value="business-bay">Business Bay</SelectItem>
                      <SelectItem value="downtown">Downtown Dubai</SelectItem>
                      <SelectItem value="jbr">JBR</SelectItem>
                      <SelectItem value="deira">Deira</SelectItem>
                      <SelectItem value="bur-dubai">Bur Dubai</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="mr-2" size={16} /> Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.fullName || !formData.mobile || !formData.email || !formData.address || !formData.area}
                  >
                    Continue <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Order Details */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Order Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="bags" className="text-base font-semibold text-gray-700">Number of Bags / Estimated Weight</Label>
                  <Input 
                    id="bags"
                    value={formData.bags}
                    onChange={(e) => handleInputChange('bags', e.target.value)}
                    placeholder="e.g., 2 bags or 5 kg"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="instructions" className="text-base font-semibold text-gray-700">Special Instructions</Label>
                  <Textarea 
                    id="instructions"
                    value={formData.instructions}
                    onChange={(e) => handleInputChange('instructions', e.target.value)}
                    placeholder="Any specific items to be cleaned or special care instructions..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="mr-2" size={16} /> Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Review Order <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Confirmation */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Review Your Order</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700">Service Category:</p>
                      <p className="text-blue-600 capitalize">{formData.serviceCategory}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Service Type:</p>
                      <p className="text-blue-600 capitalize">{formData.serviceType?.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Pickup Date:</p>
                      <p className="text-blue-600">{date ? format(date, "PPP") : "Not selected"}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Time Slot:</p>
                      <p className="text-blue-600 capitalize">{formData.timeSlot}</p>
                    </div>
                  </div>
                  
                  <hr className="border-blue-200" />
                  
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Customer Information:</p>
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Mobile:</strong> {formData.mobile}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>Area:</strong> {formData.area}</p>
                  </div>
                  
                  {formData.instructions && (
                    <div>
                      <p className="font-semibold text-gray-700">Special Instructions:</p>
                      <p className="text-gray-600">{formData.instructions}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    <ArrowLeft className="mr-2" size={16} /> Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Check className="mr-2" size={16} /> Confirm Booking
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Confirmation */}
          {step === 6 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your booking with Al Fareej Laundry! We will contact you shortly to confirm details.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-sm text-blue-700">
                  <strong>What's Next?</strong><br />
                  • You'll receive a confirmation call within 1 hour<br />
                  • Our team will arrive at your scheduled time<br />
                  • We'll send updates via SMS/WhatsApp<br />
                  • Your items will be returned fresh and clean!
                </p>
              </div>
              <div className="space-y-4">
                <Link to="/" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Return to Home
                  </Button>
                </Link>
                <a href="tel:+971502193235" className="block">
                  <Button variant="outline" className="w-full">
                    Call Us: +971 50 219 3235
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
