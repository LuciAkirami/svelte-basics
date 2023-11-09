<!-- The slot can be replaced by anything from Parent -->
<div class="card">
    <div class="card-header">
        <!--we give slot names so to access a particular slot from parent component-->
        <slot name="header"></slot> 
    </div>
    <div class="card-body">
        <slot name="body"></slot>
    </div>
    <!-- Telling svelte, only render this if parent using the footer slot-->
    {#if $$slots.footer}
		<hr />
		<div class="card-footer">
            <slot name="footer"></slot>
        </div>
	{/if}
    
</div>
 
 <style>
     .card {
         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
         transition: 0.3s;
         padding: 16px;
         width: 200px;
     }
 </style>