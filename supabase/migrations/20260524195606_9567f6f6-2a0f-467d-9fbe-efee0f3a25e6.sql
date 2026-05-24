CREATE TABLE public.community_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  display_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT display_name_length CHECK (char_length(display_name) BETWEEN 1 AND 40),
  CONSTRAINT content_length CHECK (char_length(content) BETWEEN 1 AND 500)
);

ALTER TABLE public.community_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read community messages"
  ON public.community_messages FOR SELECT
  USING (true);

CREATE POLICY "Anyone can post community messages"
  ON public.community_messages FOR INSERT
  WITH CHECK (true);

CREATE INDEX community_messages_created_at_idx
  ON public.community_messages (created_at DESC);

ALTER PUBLICATION supabase_realtime ADD TABLE public.community_messages;