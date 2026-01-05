import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  MapPin,
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      setError("Message is required");
      return;
    }

    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters");
      return;
    }

    setIsLoading(true);

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSuccess("Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gray-900/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-4xl relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl font-black text-black tracking-tight">
              Get In Touch
            </h1>
          </div>
          <p className="mt-4 text-xl text-gray-600 font-medium">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-black/10 rounded-3xl p-6 h-full">
              <h2 className="text-2xl font-black text-black mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a
                      href="mailto:juleethan@gmail.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      juleethan@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <a
                      href="tel:+639193694589"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      +63 919 369 4589
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-gray-600">Agoo, La Union, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-gray-50 rounded-2xl border-2 border-gray-100">
                <h4 className="font-semibold text-black mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">
                  I typically respond within 24 hours on weekdays.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-black/10 rounded-3xl p-8 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-all duration-500 animate-fade-in-up">
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border-2 border-green-300 rounded-xl animate-fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-green-800">
                      {success}
                    </span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-100 border-2 border-red-300 rounded-xl animate-shake">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-red-800">
                      {error}
                    </span>
                  </div>
                </div>
              )}

              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                onKeyDown={handleKeyPress}
              >
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 font-medium disabled:bg-gray-50"
                        disabled={isLoading}
                        maxLength={50}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 font-medium disabled:bg-gray-50"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 123 456 7890"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 font-medium disabled:bg-gray-50"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 font-medium disabled:bg-gray-50"
                      disabled={isLoading}
                      maxLength={100}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-black">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-300 font-medium resize-none disabled:bg-gray-50"
                      disabled={isLoading}
                      maxLength={1000}
                    />
                    <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                      {formData.message.length}/1000
                    </div>
                  </div>
                  {formData.message && formData.message.length < 10 && (
                    <p className="text-xs text-gray-500">
                      Message must be at least 10 characters
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full overflow-hidden px-8 py-4 font-bold text-white transition-all duration-500 bg-black rounded-2xl hover:bg-gray-800 hover:shadow-2xl hover:shadow-black/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:shadow-none transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-black/20"
                  >
                    <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-500"></span>
                    <span className="relative flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </div>

                {/* Keyboard Shortcut Hint */}
                <div className="text-center text-xs text-gray-400 pt-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-mono">
                    Ctrl
                  </kbd>{" "}
                  +
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-mono ml-1">
                    Enter
                  </kbd>
                  <span className="ml-2">to send quickly</span>
                </div>
              </form>
            </div>

            {/* Tips Section */}
            <div className="mt-8 bg-white/60 backdrop-blur-sm border-2 border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                What to Include
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>Project description and goals</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>Timeline and budget expectations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>Technologies you're interested in</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  <span>Your contact preferences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
