import { useGetInquiries } from '../hooks/useQueries';
import { useQueryClient } from '@tanstack/react-query';
import { Inbox, Mail, Phone, Briefcase, MessageSquare, Clock, RefreshCw } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

function formatTimestamp(timestamp: bigint): string {
  const ms = Number(timestamp / BigInt(1_000_000));
  const date = new Date(ms);
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export default function AdminInbox() {
  const queryClient = useQueryClient();
  const { data: inquiries, isLoading, isError, error, isFetching } = useGetInquiries();

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ['inquiries'] });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Inbox className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Admin Inbox</h1>
            <p className="text-sm text-muted-foreground">Contact form submissions</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isFetching}
          className="flex items-center gap-1.5"
        >
          <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </Button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 space-y-3">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
          <p className="text-destructive font-medium mb-3">
            {error instanceof Error
              ? `Failed to load inquiries: ${error.message}`
              : 'Failed to load inquiries. Please try again.'}
          </p>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            Try Again
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && inquiries && inquiries.length === 0 && (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No submissions yet</h3>
          <p className="text-muted-foreground text-sm">
            When visitors submit the contact form, their messages will appear here.
          </p>
        </div>
      )}

      {/* Inquiries List */}
      {!isLoading && !isError && inquiries && inquiries.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            {inquiries.length} {inquiries.length === 1 ? 'submission' : 'submissions'} received
          </p>
          {[...inquiries]
            .sort((a, b) => Number(b.timestamp - a.timestamp))
            .map((inquiry, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {inquiry.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{inquiry.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{formatTimestamp(inquiry.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {inquiry.businessType}
                  </span>
                </div>

                {/* Card Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary/60 flex-shrink-0" />
                    <span>{inquiry.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-primary/60 flex-shrink-0" />
                    <span>{inquiry.businessType}</span>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{inquiry.message}</p>
                  </div>
                </div>

                {/* Quick Reply via WhatsApp */}
                <div className="mt-3 flex justify-end">
                  <a
                    href={`https://wa.me/${inquiry.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${inquiry.name}, thank you for reaching out! I received your inquiry about your ${inquiry.businessType} website.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-whatsapp hover:text-whatsapp/80 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Reply on WhatsApp
                  </a>
                </div>
              </article>
            ))}
        </div>
      )}
    </div>
  );
}
