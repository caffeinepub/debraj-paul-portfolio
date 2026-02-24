import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      businessType,
      message,
    }: {
      name: string;
      phone: string;
      businessType: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(name, phone, businessType, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
