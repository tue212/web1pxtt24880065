const SUPABASE_URL = "https://ajmtuepqsbropzunhjqt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_JBl2_Xx5X6BYpZyRLyCIOQ_Ri__lB6r";

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function renderView(templateId, viewId, data) {
    let source = document.querySelector(`#${templateId}`).innerHTML;
    let template = Handlebars.compile(source);
    document.querySelector(`#${viewId}`).innerHTML = template({ data });
}