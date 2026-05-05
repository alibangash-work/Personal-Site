import { VisitorCounter } from "@/components/visitor-counter";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ali Bangash. All rights reserved.
        </p>
        <VisitorCounter />
      </div>
    </footer>
  );
}
