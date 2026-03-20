import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DeliveryApproach from "./pages/DeliveryApproach";
import UATGovernance from "./pages/UATGovernance";
import ReleaseReadiness from "./pages/ReleaseReadiness";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Pure fade — no Y movement so mobile nav stays stable during transition
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.18,        // exit: snappy clear
          animate: { duration: 0.24 }, // enter: slightly slower fade in
          ease: "easeInOut",
        }}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Routes location={location}>
          <Route path="/"        element={<Index />} />
          <Route path="/services" element={<DeliveryApproach />} />
          <Route path="/uat"     element={<UATGovernance />} />
          <Route path="/release" element={<ReleaseReadiness />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"        element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="qb-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
