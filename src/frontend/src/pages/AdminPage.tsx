import { Button } from "@/components/ui/button";
import { Code2, LogOut } from "lucide-react";
import AdminInbox from "../components/AdminInbox";
import AdminPasswordGate from "../components/AdminPasswordGate";
import { useAdminAuth } from "../hooks/useAdminAuth";

export default function AdminPage() {
  const { logout } = useAdminAuth();

  return (
    <AdminPasswordGate>
      <div className="min-h-screen bg-background text-foreground">
        {/* Admin top bar */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Debraj<span className="text-primary"> Paul</span>
              </span>
              <span className="text-xs text-muted-foreground ml-1 px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full">
                Admin
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </header>

        {/* Inbox rendered as page content */}
        <AdminInbox />
      </div>
    </AdminPasswordGate>
  );
}
