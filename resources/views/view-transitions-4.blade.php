<x-layout title="View Transitions" stylesheet="view-transitions.css">
 <header>
  <nav>
   <a href="/view-transitions">Page One</a>
   <a href="/view-transitions-2">Page Two</a>
   <a href="/view-transitions-3">Page Three</a>
  </nav>
 </header>

 <article>
  <h1 style="view-transition-name: post-title-{{ $post->id }}">{{ $post->title }}</h1>
  <p>{{ $post->body }}</p>
 </article>
 <a href="/view-transitions-3">&larr; back</a>
</x-layout>