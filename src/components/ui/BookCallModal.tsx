
import { useState, useEffect } from 'react';
import { Calendar, Clock, X } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking request:', { name, email, message, selectedDate, selectedTime });
    // In a real application, this would submit the form to a backend
    onClose();
  };
  
  // Mock dates for the calendar (next 7 days)
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: date.getDate(),
      });
    }
    
    return dates;
  };
  
  // Mock time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="relative bg-background border border-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/20 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Book a Discovery Call</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Calendar size={18} className="mr-2 text-primary" />
                <h3 className="font-medium">Select a date</h3>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {getDates().map((date) => (
                  <button
                    key={date.date}
                    type="button"
                    onClick={() => setSelectedDate(date.date)}
                    className={`flex flex-col items-center justify-center p-2 rounded-md border ${
                      selectedDate === date.date 
                        ? 'bg-primary/20 border-primary' 
                        : 'border-border bg-secondary/20 hover:bg-secondary/30'
                    } transition-colors`}
                  >
                    <span className="text-xs text-muted-foreground">{date.day}</span>
                    <span className="text-sm font-medium">{date.dateNum}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {selectedDate && (
              <div>
                <div className="flex items-center mb-4">
                  <Clock size={18} className="mr-2 text-primary" />
                  <h3 className="font-medium">Select a time</h3>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-md border ${
                        selectedTime === time 
                          ? 'bg-primary/20 border-primary' 
                          : 'border-border bg-secondary/20 hover:bg-secondary/30'
                      } transition-colors`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="btn-primary w-full"
              >
                Book Your Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCallModal;
