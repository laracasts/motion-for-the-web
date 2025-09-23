<x-layout title="View Transitions" stylesheet="view-transitions.css">
 <header>
  <nav>
   <a href="/view-transitions">Page One</a>
   <a href="/view-transitions-2">Page Two</a>
   <a href="/view-transitions-3" data-active="true">Page Three</a>
  </nav>
 </header>
 <ul>

  @foreach($posts as $post)
  <li>
   <a style="view-transition-name: post-title-{{ $post->id }}" href="/view-transitions/{{ $post->id }}">{{ $post->title
    }}</a>
  </li>
  @endforeach
 </ul>
</x-layout>