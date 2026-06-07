CREATE POLICY "Admin email write partners"
ON public.partners
FOR ALL
TO authenticated
USING (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com')
WITH CHECK (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com');

CREATE POLICY "Admin email write opportunities"
ON public.opportunities
FOR ALL
TO authenticated
USING (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com')
WITH CHECK (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com');

CREATE POLICY "Admin email write initiative media"
ON public.initiative_media
FOR ALL
TO authenticated
USING (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com')
WITH CHECK (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com');

CREATE POLICY "Admin email write themes"
ON public.themes
FOR ALL
TO authenticated
USING (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com')
WITH CHECK (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com');

CREATE POLICY "Admin email write metrics"
ON public.metrics
FOR ALL
TO authenticated
USING (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com')
WITH CHECK (lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com');