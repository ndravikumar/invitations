import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/NotFound";
import ClassicPreview from "./pages/previews/ClassicPreview";
import ModernPreview from "./pages/previews/ModernPreview";
import FestivePreview from "./pages/previews/FestivePreview";
import RoyalPreview from "./pages/previews/RoyalPreview";
import MinimalPreview from "./pages/previews/MinimalPreview";
import HeritagePreview from "./pages/previews/HeritagePreview";
import PeacockPreview from "./pages/previews/PeacockPreview";
import RusticPreview from "./pages/previews/RusticPreview";
import DestinationPreview from "./pages/previews/DestinationPreview";
import BollywoodPreview from "./pages/previews/BollywoodPreview";
import ScrollToTop from "./components/ScrollToTop";
import SubhalekhaRoyale from "./pages/previews/SubhalekhaRoyale";
import TemplatesPage from "./pages/TemplatesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/preview/royalTelugu" element={<SubhalekhaRoyale />} />
          <Route path="/preview/classic" element={<ClassicPreview />} />
          <Route path="/preview/modern" element={<ModernPreview />} />
          <Route path="/preview/festive" element={<FestivePreview />} />
          <Route path="/preview/royal" element={<RoyalPreview />} />
          <Route path="/preview/minimal" element={<MinimalPreview />} />
          <Route path="/preview/heritage" element={<HeritagePreview />} />
          <Route path="/preview/peacock" element={<PeacockPreview />} />
          <Route path="/preview/rustic" element={<RusticPreview />} />
          <Route path="/preview/destination" element={<DestinationPreview />} />
          <Route path="/preview/bollywood" element={<BollywoodPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
