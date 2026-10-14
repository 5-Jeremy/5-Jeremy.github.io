---
title: "TreeHCA: Tree-Based Hindsight Credit Assignment for Multi-Turn LLM Agents"
collection: publications
category: conferences
permalink: /publication/treehca
excerpt: 'Developed TreeHCA, a critic-free algorithm for reinforcement learning with verifiable rewards in multi-turn environments that performs branching rollouts and grounds both branching and credit assignment decisions in hindsight information that is available during training. The hindsight information takes the form of changes in the LLM’s likelihood of guessing the correct answer, which is a useful proxy for how much information has been gained during a turn. When used to fine-tune Qwen3 models on question answering tasks with a RAG search tool, TreeHCA outperformed the existing state-of-the-art method by 2.8% or more on most of the evaluation datasets considered.'
# Only the month is known; day 01 is used for Jekyll sorting.
date: 2026-12-01
publication_date: "December 2026"
venue: "The Neurips 2026 Workshop on Long Context Foundation Models"
venue_label: "Presented at"
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
arxivurl: 'https://arxiv.org/abs/2610.12828'
bibtexurl: '/files/bibtex/treehca.bib'
citation: "Mukherjee, D., Carleton, J., Vemuri, S., Shakkottai, S. and Kalathil, D., 2026. TreeHCA: Hindsight-Guided Exploration and Credit Assignment for Multi-Turn LLM Agents. arXiv preprint arXiv:2610.12828."
---
## Authors

Debajoy Mukherjee, Jeremy Carleton, Sushil Vemuri, Srinivas Shakkottai, Dileep Kalathil

## Abstract
Outcome-supervised group-relative policy optimization (GRPO) gives every token in an LLM agent's trajectory the same advantage, leaving useful and unhelpful decisions undifferentiated. Hindsight credit assignment (HCA) can refine this feedback, but its estimates depend on trajectories containing informative alternatives at consequential histories. We introduce TreeHCA, which couples *sampling via hindsight ratios* to generate these alternatives with *hindsight credit assignment* to evaluate their contribution. We use changes in reference-answer likelihood to revisit intermediate histories and select alternative continuations, forming a tree of reasoning and tool interactions. This exploration changes the distribution of sampled continuations. We derive the corresponding inverse-hindsight importance correction, including an exact finite-pool identity, and use its structure in a normalized tree backup that propagates terminal outcomes into turn-level advantages. This common hindsight structure is TreeHCA's central design principle, linking informative exploration to hindsight-guided credit assignment. Across seven question-answering benchmarks and three Qwen backbones, TreeHCA outperforms every baseline in aggregate exact match, validating our paired design for multi-turn LLM training.

## Links

[Arxiv Page](https://arxiv.org/abs/2610.12828)

[Github Page](https://github.com/TheBlackCat22/TreeHCA)
