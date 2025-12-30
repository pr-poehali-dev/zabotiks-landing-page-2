
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Elka from "./pages/Elka";
import Musor from "./pages/Musor";
import Porucheniya from "./pages/Porucheniya";
import Master from "./pages/Master";
import Tehnika from "./pages/Tehnika";
import Arendodateli from "./pages/Arendodateli";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/elka" element={<Elka />} />
          <Route path="/musor" element={<Musor />} />
          <Route path="/porucheniya" element={<Porucheniya />} />
          <Route path="/master" element={<Master />} />
          <Route path="/tehnika" element={<Tehnika />} />
          <Route path="/arendodateli" element={<Arendodateli />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;