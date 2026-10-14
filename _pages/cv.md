---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
cv_pdf: /files/cv.pdf
redirect_from:
  - /resume
---

{% assign cv_file = site.static_files | where: "path", page.cv_pdf | first %}
{% if cv_file %}
{% assign cv_url = page.cv_pdf | relative_url %}
<iframe
  class="cv-pdf-preview"
  src="{{ cv_url }}#view=FitH"
  title="Curriculum vitae PDF preview">
</iframe>

<p>If the preview does not appear in your browser, <a href="{{ cv_url }}" target="_blank" rel="noopener">open the PDF directly</a>.</p>
{% else %}
<p>CV coming soon.</p>
{% endif %}
