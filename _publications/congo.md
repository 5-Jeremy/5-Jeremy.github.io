---
title: "CONGO: Compressive Online Gradient Optimization"
collection: publications
category: conferences
permalink: /publication/congo
excerpt: 'Synthesized ideas from zeroth-order stochastic optimization and compressive sensing into the online convex optimization framework to prove regret bounds under the assumption that objective function gradients are sufficiently sparse. Demonstrated how a zeroth-order gradient descent algorithm with compressive sensing can rapidly optimize the allocation of resources between microservices on the DeathStarBench suite.'
# Only the month is known; day 01 is used for Jekyll sorting.
date: 2025-01-01
publication_date: "January 2025"
venue: "The Proceedings of The Thirteenth International Conference on Learning Representations"
arxivurl: 'https://arxiv.org/abs/2407.06325'
bibtexurl: '/files/bibtex/congo.bib'
citation: "Carleton, Jeremy, Prathik Vijaykumar, Divyanshu Saxena, Dheeraj Narasimha, Srinivas Shakkottai, and Aditya Akella. \"CONGO: Compressive online gradient optimization.\" In International Conference on Learning Representations, vol. 2025, pp. 37663-37696. 2025."
---
## Authors

Jeremy Carleton, Prathik Vijaykumar, Divyanshu Saxena, Dheeraj Narasimha, Srinivas Shakkottai, Aditya Akella

## Abstract

We address the challenge of zeroth-order online convex optimization where the objective function's gradient exhibits sparsity, indicating that only a small number of dimensions possess non-zero gradients. Our aim is to leverage this sparsity to obtain useful estimates of the objective function's gradient even when the only information available is a limited number of function samples. Our motivation stems from the optimization of large-scale queueing networks that process time-sensitive jobs. Here, a job must be processed by potentially many queues in sequence to produce an output, and the service time at any queue is a function of the resources allocated to that queue. Since resources are costly, the end-to-end latency for jobs must be balanced with the overall cost of the resources used. While the number of queues is substantial, the latency function primarily reacts to resource changes in only a few, rendering the gradient sparse. We tackle this problem by introducing the Compressive Online Gradient Optimization framework which allows compressive sensing methods previously applied to stochastic optimization to achieve regret bounds with an optimal dependence on the time horizon without the full problem dimension appearing in the bound. For specific algorithms, we reduce the samples required per gradient estimate to scale with the gradient's sparsity factor rather than its full dimensionality. Numerical simulations and real-world microservices benchmarks demonstrate CONGO's superiority over gradient descent approaches that do not account for sparsity.

## Links

[Poster Page](https://iclr.cc/virtual/2025/poster/31029)

[Arxiv Page](https://arxiv.org/abs/2407.06325)

[Github Page](https://github.com/5-Jeremy/CONGO)