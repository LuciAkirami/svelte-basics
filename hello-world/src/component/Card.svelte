<!-- The slot can be replaced by anything from Parent -->
<div class="card">
   <slot>Default Content</slot>
</div>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin-bottom: 20px;
        padding: 16px;
        width: 200px;
    }
</style>