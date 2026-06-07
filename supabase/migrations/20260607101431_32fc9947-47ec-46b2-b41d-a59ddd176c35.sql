GRANT INSERT ON public.user_roles TO authenticated;

CREATE POLICY "Admin email can create own superadmin role"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
  AND role = 'superadmin'
  AND lower(auth.jwt() ->> 'email') = 'babar.by@gmail.com'
);