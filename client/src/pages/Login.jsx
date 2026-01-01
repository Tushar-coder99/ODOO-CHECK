import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import Context

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); 
  const { login } = useCart(); // Get login function

  const handleAuth = (e) => {
    e.preventDefault(); 
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (isLogin) {
      // Simulate Backend Login
      const mockUser = { name: "Harsh", email: email };
      login(mockUser); // Tell Context we are logged in
      navigate("/");
    } else {
      alert("Account Created Successfully! Please Sign In.");
      setIsLogin(true); 
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col md:flex-row min-h-[600px]">
          
          <div className="w-full md:w-1/2 p-12 bg-gradient-to-br from-blue-600 to-blue-800 relative flex flex-col justify-between text-white">
             <div>
                <Link to="/" className="text-2xl font-bold tracking-tight mb-8 block">NovaMart</Link>
                <motion.h2 
                  key={isLogin ? "login-h" : "signup-h"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold mb-4"
                >
                  {isLogin ? "Welcome Back!" : "Join the Family"}
                </motion.h2>
                <p className="text-blue-100 text-lg">
                  {isLogin ? "Access your exclusive orders and deals." : "Create an account to shop faster."}
                </p>
             </div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-slate-900/50">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? "login-form" : "register-form"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    {isLogin ? "Sign In to Account" : "Create Account"}
                  </h3>

                  <form className="space-y-5" onSubmit={handleAuth}>
                    {!isLogin && (
                      <div className="relative group">
                        <User className="absolute left-3 top-3.5 text-slate-400" size={20} />
                        <input type="text" placeholder="Full Name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-10 py-3 focus:outline-none focus:border-blue-500 transition-all" />
                      </div>
                    )}
                    
                    <div className="relative group">
                      <Mail className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-10 py-3 focus:outline-none focus:border-blue-500 transition-all" />
                    </div>

                    <div className="relative group">
                      <Lock className="absolute left-3 top-3.5 text-slate-400" size={20} />
                      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-10 py-3 focus:outline-none focus:border-blue-500 transition-all" />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={18} />
                    </button>
                  </form>

                  <div className="mt-8 text-center text-slate-400">
                    <p>
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-blue-400 font-bold ml-1 hover:text-blue-300 transition-colors">
                        {isLogin ? "Sign Up" : "Log In"}
                      </button>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;