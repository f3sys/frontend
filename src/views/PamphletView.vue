<template>
    <div class="w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8">
        <div class="self-start justify-self-center max-w-lg w-full grid gap-3">
            <span class="text-4xl md:text-5xl mb-6">
                パンフレット
            </span>
            <div class="flex flex-col gap-3 mb-10 text-sm font-light text-muted-color">
                <span>
                    データ版パンフレットをダウンロードいただけます。
                </span>
                <span>
                    <i class="pi pi-asterisk !text-sm" />
                    個人利用・商用を問わず、再配布及びAICJ学園祭以外の目的での利用はご遠慮ください。
                </span>
            </div>
            <Image class="mb-10" src="https://placehold.co/210x297"
                image-style="width:100%; max-width: 20em; height: auto; margin-left: auto; margin-right: auto;">
            </Image>
            <Button label="ダウンロード" icon="pi pi-download" class="w-full" />
        </div>
    </div>
</template>