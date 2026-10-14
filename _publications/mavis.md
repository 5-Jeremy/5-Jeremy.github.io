---
title: "MAVIS: Multi-Objective Alignment via Inference-Time Value-Guided Selection"
collection: publications
category: conferences
permalink: /publication/mavis
excerpt: 'Developed and evaluated a framework for training value models and using them to align LLM outputs toward human preferences in multi-objective settings with potentially conflicting objectives. Demonstrated that Llama models of multiple sizes produce outputs which are significantly better aligned when guided by an iteratively-trained value model compared to existing methods, as judged by reward model outputs and a Qwen2.5-72B LLM judge.'
# Only the month is known; day 01 is used for Jekyll sorting.
date: 2026-2-01
publication_date: "February 2026"
preprint: true
arxivurl: 'https://arxiv.org/abs/2508.13415'
bibtexurl: '/files/bibtex/mavis.bib'
citation: "Carleton, J., Mukherjee, D., Shakkottai, S. and Kalathil, D., 2025. MAVIS: Multi-Objective Alignment via Inference-Time Value-Guided Selection. arXiv preprint arXiv:2508.13415."
---
## Authors

Jeremy Carleton, Debajoy Mukherjee, Srinivas Shakkottai, Dileep Kalathil

## Abstract

Large Language Models (LLMs) are increasingly deployed across diverse applications that demand balancing multiple, often conflicting, objectives -- such as helpfulness, harmlessness, or humor. Many traditional methods for aligning outputs to user-specific preferences require fine-tuning models for each objective or for specific preference configurations, which is computationally expensive and inflexible. We introduce **MAVIS** -- *Multi-Objective Alignment via Inference-Time Value-Guided Selection* -- a lightweight inference-time alignment framework that enables dynamic control over LLM behavior without modifying the base model's weights. MAVIS trains a set of small value models, each corresponding to a distinct objective. At inference time, these value models are combined using user-specified weights to produce a tilting function that adjusts the base model's output distribution toward desired trade-offs. The value models are trained using a simple iterative algorithm that enables monotonic improvement of the KL-regularized policy. We show empirically that MAVIS achieves a superior pareto front compared to baselines which fine-tune per-objective models and combine them post hoc or train a single preference-conditioned value model for guidance.

## Links

[Arxiv Page](https://arxiv.org/abs/2508.13415)

[Github Page](https://github.com/5-Jeremy/MAVIS/tree/main)